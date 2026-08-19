import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
      const ext = path.extname(entry.name);
      const baseName = path.basename(entry.name, ext);
      const outPath = path.join(dir, `${baseName}.webp`);

      console.log(`Processing: ${fullPath}`);
      
      try {
        let pipeline = sharp(fullPath);
        const metadata = await pipeline.metadata();

        // Resize massive images
        // For hero backgrounds (e.g. course higlight.jpg, first_bg.png) we can limit width to 1920
        // For others, 1200 or less is fine, but we'll use a safe 1920 global max-width to retain quality
        if (metadata.width > 1920) {
           pipeline = pipeline.resize(1920, null, { withoutEnlargement: true });
        }

        await pipeline.webp({ quality: 80 }).toFile(outPath);
        console.log(`Saved: ${outPath}`);
        
        // Delete original file to clean up space
        await fs.unlink(fullPath);
      } catch (err) {
        console.error(`Failed to process ${fullPath}:`, err);
      }
    }
  }
}

async function main() {
  console.log('Starting image optimization...');
  await processDirectory(publicDir);
  console.log('Finished image optimization.');
}

main().catch(console.error);
