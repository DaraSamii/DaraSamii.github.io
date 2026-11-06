import { test } from 'node:test';
import assert from 'node:assert/strict';
import { merge, lp, alternates, content } from './index.js';
import { ui } from './ui.js';

test('merge: keyed overlay on arrays, index overlay, undefined keeps English', () => {
  const base = [{ slug: 'a', t: 'A', links: [{ label: 'GitHub' }, { label: 'Paper' }] }, { slug: 'b', t: 'B' }];
  const out = merge(base, { a: { t: 'Á', links: [undefined, { label: 'Article' }] } });
  assert.deepEqual(out, [{ slug: 'a', t: 'Á', links: [{ label: 'GitHub' }, { label: 'Article' }] }, { slug: 'b', t: 'B' }]);
  assert.deepEqual(merge([['Advisor', 'X']], [['Directeur', undefined]]), [['Directeur', 'X']]);
});

test('lp: only bilingual pages get /fr; assets, PDFs and the CV never do', () => {
  assert.equal(lp('/', 'fr'), '/fr/');
  assert.equal(lp('/research/', 'fr'), '/fr/research/');
  assert.equal(lp('/#airfoil', 'fr'), '/fr/#airfoil');
  assert.equal(lp('/rocketry/#certifications', 'fr'), '/fr/rocketry/#certifications');
  assert.equal(lp('/CV/cv.pdf', 'fr'), '/CV/cv.pdf');
  assert.equal(lp('/teaching/hpr-certification-study-companion.pdf', 'fr'), '/teaching/hpr-certification-study-companion.pdf');
  assert.equal(lp('https://github.com/x', 'fr'), 'https://github.com/x');
  assert.equal(lp('/research/', 'en'), '/research/');
});

test('alternates map a page to its twin in the other language', () => {
  assert.deepEqual(alternates('/'), { en: '/', fr: '/fr/' });
  assert.deepEqual(alternates('/fr/teaching/'), { en: '/teaching/', fr: '/fr/teaching/' });
});

test('French content: every project, theme and item keeps its structure; ids and links unchanged', () => {
  const en = content('en'), fr = content('fr');
  for (const k of ['projects', 'themes', 'education', 'experience', 'awards', 'certifications', 'teachingRoles', 'courses', 'materials', 'stats']) {
    assert.equal(fr[k].length, en[k].length, k);
  }
  fr.projects.forEach((p, i) => {
    assert.equal(p.slug, en.projects[i].slug);
    assert.deepEqual(p.links.map((l) => l.href), en.projects[i].links.map((l) => l.href));
    assert.deepEqual(p.images, en.projects[i].images);
  });
  assert.equal(fr.bySlug['mesh-gnn'].title, 'GNN sur maillage pour accélérer la CFD');
  assert.equal(fr.education[0].details[0][1], en.education[0].details[0][1]); // advisor link kept
});

test('every English UI key has a French translation', () => {
  const missing = Object.keys(ui.en).filter((k) => !(k in ui.fr));
  assert.deepEqual(missing, []);
});
