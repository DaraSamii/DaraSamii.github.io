// Site-wide behaviour: theme, mobile menu, photo carousel, project slideshows, image modal, reveal-on-scroll.
const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Theme toggle: explicit choice is stored; otherwise the OS preference applies.
document.querySelectorAll('.theme-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    const apply = () => {
      root.dataset.theme = dark ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
      window.dispatchEvent(new Event('themechange'));
    };
    // Crossfade the whole page; the knob has its own transition name, so it slides instead of fading.
    if (document.startViewTransition && !reduced) {
      root.classList.add('vt-theme');
      document.startViewTransition(apply).finished.finally(() => root.classList.remove('vt-theme'));
    } else apply();
  });
});

// Language switch: slide the knob to the other language, then go to the same page in that language.
document.querySelectorAll('[data-lang-switch]').forEach((a) => a.addEventListener('click', (e) => {
  if (reduced || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
  e.preventDefault();
  a.dataset.pos = a.dataset.pos === '1' ? '0' : '1';
  setTimeout(() => { location.href = a.href; }, 280);
}));

// Images that are not loaded yet fade in when they arrive.
document.querySelectorAll('img').forEach((img) => {
  if (img.complete || !img.getAttribute('src')) return;
  img.classList.add('img-wait');
  const done = () => img.classList.remove('img-wait');
  img.addEventListener('load', done, { once: true });
  img.addEventListener('error', done, { once: true });
});

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
toggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
menu?.addEventListener('click', (e) => { if (e.target.closest('a')) menu.classList.remove('open'); });

// Timers below only do work while their element is on screen and the tab is visible.
const shown = new WeakMap();
const vio = 'IntersectionObserver' in window && new IntersectionObserver((es) => es.forEach((e) => shown.set(e.target, e.isIntersecting)));
const watch = (el) => { if (vio) { shown.set(el, false); vio.observe(el); } };
const onScreen = (el) => !document.hidden && (!vio || shown.get(el));
// Images below carry data-src and load only right before they are first shown.
const load = (img) => {
  if (!img.getAttribute('src') && img.dataset.src) img.src = img.dataset.src;
  return img.decode ? img.decode().catch(() => {}) : Promise.resolve();
};

// Hero photo carousel: random next photo every 4 s.
const heroBox = document.querySelector('.hero-photo');
const photos = heroBox ? [...heroBox.querySelectorAll(':scope > img')] : [];
if (photos.length > 1 && !reduced) {
  let cur = 0;
  watch(heroBox);
  setInterval(() => {
    if (!onScreen(heroBox)) return;
    let next = cur;
    while (next === cur) next = Math.floor(Math.random() * photos.length);
    load(photos[next]).then(() => {
      photos[cur].classList.remove('active');
      photos[next].classList.add('active');
      cur = next;
    });
  }, 4000);
}

// Project slideshows + shared image modal
const modal = document.querySelector('.modal');
let modalImgs = [], modalIdx = 0;
// The viewer image zooms/fades in once loaded and fades out before switching to the next one.
function showModal(i) {
  modalIdx = (i + modalImgs.length) % modalImgs.length;
  const img = modal.querySelector('img');
  const { src, alt } = modalImgs[modalIdx];
  modal.querySelector('.modal-count').textContent = `${modalIdx + 1} / ${modalImgs.length}`;
  img.classList.remove('ready');
  const swap = () => {
    img.src = src; img.alt = alt;
    (img.decode ? img.decode() : Promise.resolve()).catch(() => {}).then(() => img.classList.add('ready'));
  };
  if (img.getAttribute('src') && !reduced) setTimeout(swap, 150); else swap();
}
function closeModal() { modal.classList.remove('open'); document.body.style.overflow = ''; }
if (modal) {
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.querySelector('.modal-prev').addEventListener('click', () => showModal(modalIdx - 1));
  modal.querySelector('.modal-next').addEventListener('click', () => showModal(modalIdx + 1));
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  let mx = null;
  modal.addEventListener('touchstart', (e) => { mx = e.touches[0].clientX; }, { passive: true });
  modal.addEventListener('touchend', (e) => {
    if (mx === null) return;
    const dx = e.changedTouches[0].clientX - mx;
    if (Math.abs(dx) > 40) showModal(modalIdx + (dx < 0 ? 1 : -1));
    mx = null;
  });
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') showModal(modalIdx - 1);
    if (e.key === 'ArrowRight') showModal(modalIdx + 1);
  });
}

document.querySelectorAll('.project-media[data-slides]').forEach((box) => {
  const imgs = [...box.querySelectorAll('img')];
  const dots = [...box.querySelectorAll('.slide-dots span')];
  let i = 0, timer;
  const show = (n) => {
    const next = (n + imgs.length) % imgs.length;
    load(imgs[next]).then(() => {
      imgs[i].classList.remove('active'); dots[i]?.classList.remove('on');
      i = next;
      imgs[i].classList.add('active'); dots[i]?.classList.add('on');
    });
  };
  box.querySelector('.slide-prev')?.addEventListener('click', () => show(i - 1));
  box.querySelector('.slide-next')?.addEventListener('click', () => show(i + 1));
  const full = imgs.map((im) => ({ src: im.dataset.full || im.dataset.src || im.src, alt: im.alt }));
  imgs.forEach((img, n) => img.addEventListener('click', () => openModal(full, n)));
  if (imgs.length > 1 && !reduced) {
    watch(box);
    const start = () => { timer = setInterval(() => onScreen(box) && show(i + 1), 4500); };
    box.addEventListener('mouseenter', () => clearInterval(timer));
    box.addEventListener('mouseleave', start);
    start();
  }
});

function openModal(list, n) {
  if (!modal) return;
  modalImgs = list; showModal(n); modal.classList.add('open'); document.body.style.overflow = 'hidden';
}

// Large feature galleries: thumbnails swap the main image; the main image opens the viewer.
document.querySelectorAll('[data-gallery]').forEach((g) => {
  const main = g.querySelector('.feature-main img');
  if (!main) return;
  const thumbs = [...g.querySelectorAll('.thumb')];
  // `show` is the 960 px copy for the page; `src` is the 1600 px copy for the full-screen viewer.
  const list = thumbs.length
    ? thumbs.map((t) => ({ show: t.dataset.src, src: t.dataset.full, alt: t.dataset.alt }))
    : [{ show: main.src, src: main.dataset.full || main.src, alt: main.alt }];
  const idx = g.querySelector('[data-idx]');
  let cur = 0;
  const show = (i) => {
    cur = (i + list.length) % list.length;
    const { show: next, alt } = list[cur];
    main.classList.add('swap');
    setTimeout(() => {
      main.removeAttribute('srcset');
      main.src = next; main.alt = alt;
      (main.decode ? main.decode() : Promise.resolve()).catch(() => {}).then(() => main.classList.remove('swap'));
    }, reduced ? 0 : 180);
    if (idx) idx.textContent = cur + 1;
    thumbs.forEach((x, k) => x.setAttribute('aria-pressed', String(k === cur)));
    thumbs[cur]?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
  };
  thumbs.forEach((t, i) => t.addEventListener('click', () => show(i)));
  g.querySelector('.gal-prev')?.addEventListener('click', () => show(cur - 1));
  g.querySelector('.gal-next')?.addEventListener('click', () => show(cur + 1));
  // Horizontal swipe on touch screens; vertical swipes still scroll the page.
  let sx = null, sy = null, swiped = false;
  const stage = g.querySelector('.feature-stage');
  stage?.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  stage?.addEventListener('touchend', (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 40 && Math.abs(dx) > 1.5 * Math.abs(dy)) { show(cur + (dx < 0 ? 1 : -1)); swiped = true; }
    sx = null;
  });
  g.querySelector('.feature-main').addEventListener('click', () => { if (swiped) { swiped = false; return; } openModal(list, cur); });
});

// Photo groups (awards, certifications): any image button opens the viewer on its group.
document.querySelectorAll('[data-photos]').forEach((box) => {
  const btns = [...box.querySelectorAll('button')];
  const list = btns.map((b) => { const im = b.querySelector('img'); return { src: im.dataset.full || im.src, alt: im.alt }; });
  btns.forEach((b, i) => b.addEventListener('click', () => openModal(list, i)));
});

// Click-to-play YouTube: swap the thumbnail for the real player only when asked.
document.querySelectorAll('[data-yt]').forEach((b) => b.addEventListener('click', () => {
  const f = document.createElement('iframe');
  f.src = `https://www.youtube-nocookie.com/embed/${b.dataset.yt}?autoplay=1`;
  f.title = b.dataset.title;
  f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  f.referrerPolicy = 'strict-origin-when-cross-origin';
  f.allowFullscreen = true;
  b.replaceWith(f);
}));

// Project category filter
const filter = document.querySelector('[data-filter]');
filter?.addEventListener('click', (e) => {
  const b = e.target.closest('button[data-cat]');
  if (!b) return;
  filter.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  document.querySelectorAll('[data-cats]').forEach((card) => {
    card.hidden = b.dataset.cat !== 'all' && !card.dataset.cats.split(' ').includes(b.dataset.cat);
  });
});

// Reveal on scroll
const io = 'IntersectionObserver' in window && new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el) => (io ? io.observe(el) : el.classList.add('in')));
