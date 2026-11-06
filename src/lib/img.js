// URL of the build-time WebP copy of an image (scripts/optimize-images.mjs). Sizes: 400, 960, 1600.
// Anything that isn't a raster under /assets/images/ (SVG, external URLs) is returned unchanged.
export function opt(src, w = 960) {
  return /^\/assets\/images\/.+\.(jpe?g|png|gif)$/i.test(src) ? `/_img${src.slice('/assets/images'.length)}.w${w}.webp` : src;
}
