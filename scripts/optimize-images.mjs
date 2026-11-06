// Build step: resized WebP copies of every raster image in public/assets/images → public/_img (gitignored).
// Sizes: 400 (thumbnails), 960 (cards), 1600 (full screen). GIFs stay animated except the 400 thumbnail.
// Incremental: an output newer than its source is skipped.
import sharp from 'sharp';
import { readdir, stat, mkdir } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';

const SRC = 'public/assets/images';
const OUT = 'public/_img';
export const SIZES = [400, 960, 1600];

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (/\.(jpe?g|png|gif)$/i.test(e.name)) yield p;
  }
}
const mtime = (p) => stat(p).then((s) => s.mtimeMs, () => 0);

let made = 0, skipped = 0;
const t0 = Date.now();
const jobs = [];
for await (const file of walk(SRC)) {
  const rel = relative(SRC, file);
  const gif = /\.gif$/i.test(file);
  const info = await stat(file);
  if (!info.size) continue; // empty placeholder files from the old site
  const srcTime = info.mtimeMs;
  for (const w of SIZES) {
    const out = join(OUT, `${rel}.w${w}.webp`);
    jobs.push((async () => {
      if ((await mtime(out)) > srcTime) return skipped++;
      await mkdir(dirname(out), { recursive: true });
      const animated = gif && w > 400;
      await sharp(file, { animated })
        .resize({ width: gif ? Math.min(w, 960) : w, withoutEnlargement: true })
        .webp({ quality: animated ? 70 : 80, effort: 4 })
        .toFile(out);
      made++;
    })());
  }
}
await Promise.all(jobs);
console.log(`optimize-images: ${made} written, ${skipped} up to date (${((Date.now() - t0) / 1000).toFixed(1)} s)`);
