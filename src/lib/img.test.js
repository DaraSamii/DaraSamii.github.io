import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { opt } from './img.js';
import { content } from '../i18n/index.js';

test('opt maps rasters to WebP copies and leaves everything else alone', () => {
  assert.equal(opt('/assets/images/projects/cr25-cfd/mesh.png', 400), '/_img/projects/cr25-cfd/mesh.png.w400.webp');
  assert.equal(opt('/assets/images/profile/1.jpg'), '/_img/profile/1.jpg.w960.webp');
  assert.equal(opt('/favicon.svg'), '/favicon.svg');
  assert.equal(opt('https://i.ytimg.com/vi/x/hq.jpg'), 'https://i.ytimg.com/vi/x/hq.jpg');
});

test('every image the site references has its optimized copies (run the optimizer first)', () => {
  const { projects, certifications, profilePhotos, blogPosts, education } = content('en');
  const srcs = [
    ...projects.flatMap((p) => (p.images ?? []).map((i) => i.src)),
    ...certifications.flatMap((c) => (c.images ?? []).map((i) => i.src)),
    ...profilePhotos, ...blogPosts.map((b) => b.image), ...education.map((e) => e.logo),
  ];
  const missing = srcs.flatMap((s) => [400, 960, 1600].map((w) => opt(s, w))).filter((u) => u.startsWith('/_img') && !existsSync(`public${u}`));
  assert.deepEqual(missing, []);
});
