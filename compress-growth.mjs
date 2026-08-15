import sharp from 'sharp';
import { join } from 'path';

const PUBLIC = './public';
const src = join(PUBLIC, 'growth_2.jpg');
const out = join(PUBLIC, 'growth_2.webp');

async function run() {
  try {
    await sharp(src)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 78, effort: 4 })
      .toFile(out);
    console.log('Successfully compressed growth_2.jpg to growth_2.webp');
  } catch (e) {
    console.error(`Error: ${e.message}`);
  }
}

run();
