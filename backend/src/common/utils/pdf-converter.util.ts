import { PDFDocument } from 'pdf-lib';
import sharp from 'sharp';
import * as fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);
const tempDir = path.join(process.cwd(), 'temp');

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

export async function convertPdfToImage(pdfBuffer: Buffer): Promise<Buffer> {
  try {
    const pdfPath = path.join(tempDir, `temp-${Date.now()}.pdf`);
    const pngPath = path.join(tempDir, `temp-${Date.now()}.png`);

    fs.writeFileSync(pdfPath, pdfBuffer);

    await execPromise(
      `pdftoppm -png -singlefile -r 300 ${pdfPath} ${pngPath.replace('.png', '')}`,
    );

    const pngBuffer = fs.readFileSync(`${pngPath.replace('.png', '')}-1.png`);

    const optimizedBuffer = await sharp(pngBuffer)
      .png()
      .resize(2000, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })
      .toBuffer();

    fs.unlinkSync(pdfPath);
    fs.unlinkSync(`${pngPath.replace('.png', '')}-1.png`);

    return optimizedBuffer;
  } catch (error) {
    throw new Error(`PDF conversion failed: ${error.message}`);
  }
}
