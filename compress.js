import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = path.join(process.cwd(), 'public', 'placement');

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png'));

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(inputDir, file.replace('.png', '.webp'));
  
  sharp(inputPath)
    .resize(600) // Scale down for cards
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => {
      console.log(`Compressed: ${file} -> ${file.replace('.png', '.webp')}`);
    })
    .catch(err => {
      console.error(`Error compressing ${file}:`, err);
    });
}
