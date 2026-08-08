// compress-images.mjs — run once with: node compress-images.mjs
import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const PUBLIC = './public';
const MAX_WIDTH = 1920;

const files = readdirSync(PUBLIC).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

for (const file of files) {
  const src = join(PUBLIC, file);
  const sizeMB = (statSync(src).size / 1024 / 1024).toFixed(2);
  const ext = extname(file).toLowerCase();
  const name = basename(file, ext);

  // Output as WebP for maximum compression
  const out = join(PUBLIC, `${name}.webp`);

  try {
    const info = await sharp(src)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 78, effort: 4 })
      .toFile(out);

    const newMB = (info.size / 1024 / 1024).toFixed(2);
    console.log(`✓ ${file} (${sizeMB}MB) → ${name}.webp (${newMB}MB)`);
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`);
  }
}
console.log('\nDone! Update src paths from .jpg/.png → .webp');
