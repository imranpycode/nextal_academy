import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'fs';
import { join, extname, basename } from 'path';

const PUBLIC = './public/course page images';
const MAX_WIDTH = 1920;

const files = readdirSync(PUBLIC).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

async function run() {
  for (const file of files) {
    const src = join(PUBLIC, file);
    const sizeMB = (statSync(src).size / 1024 / 1024).toFixed(2);
    const ext = extname(file).toLowerCase();
    const name = basename(file, ext);

    const out = join(PUBLIC, `${name}.webp`);

    try {
      const info = await sharp(src)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: 78, effort: 4 })
        .toFile(out);

      const newMB = (info.size / 1024 / 1024).toFixed(2);
      console.log(`✓ ${file} (${sizeMB}MB) → ${name}.webp (${newMB}MB)`);
      
      // Remove original file after successful compression
      unlinkSync(src);
    } catch (e) {
      console.error(`✗ ${file}: ${e.message}`);
    }
  }
  console.log('\nDone! Update src paths to .webp');
}

run();
