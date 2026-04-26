import { PDFDocument } from 'pdf-lib';
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

async function createPdfFromImage() {
  const imagePath = '/vercel/share/v0-project/public/landing-page-screenshot.png';
  const outputPath = '/vercel/share/v0-project/public/landing-page-gustavo.pdf';

  console.log('Reading screenshot...');
  
  // Read the image and get its dimensions
  const imageBuffer = await fs.readFile(imagePath);
  const metadata = await sharp(imageBuffer).metadata();
  
  console.log(`Image size: ${metadata.width}x${metadata.height}`);
  
  // Convert PNG to JPEG for better PDF compatibility
  const jpegBuffer = await sharp(imageBuffer)
    .jpeg({ quality: 95 })
    .toBuffer();
  
  // Create PDF document
  const pdfDoc = await PDFDocument.create();
  
  // Embed the JPEG image
  const image = await pdfDoc.embedJpg(jpegBuffer);
  
  // A4 width in points (595.28), but we'll use a wider format for landing page
  const pageWidth = 842; // A4 landscape width
  const scale = pageWidth / metadata.width;
  const pageHeight = metadata.height * scale;
  
  // Add a page with the image dimensions
  const page = pdfDoc.addPage([pageWidth, pageHeight]);
  
  // Draw the image on the page
  page.drawImage(image, {
    x: 0,
    y: 0,
    width: pageWidth,
    height: pageHeight,
  });
  
  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  await fs.writeFile(outputPath, pdfBytes);
  
  console.log(`PDF created successfully: ${outputPath}`);
  console.log(`File size: ${(pdfBytes.length / 1024 / 1024).toFixed(2)} MB`);
}

createPdfFromImage().catch(console.error);
