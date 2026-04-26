import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generatePDF() {
  console.log('Iniciando geração do PDF...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport for full page capture
  await page.setViewport({
    width: 1440,
    height: 900,
    deviceScaleFactor: 2
  });
  
  // Navigate to the local dev server
  console.log('Acessando a página...');
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle0',
    timeout: 60000
  });
  
  // Wait for animations to complete
  await page.waitForTimeout(3000);
  
  // Get the full page height
  const bodyHandle = await page.$('body');
  const { height } = await bodyHandle.boundingBox();
  await bodyHandle.dispose();
  
  // Generate PDF
  console.log('Gerando PDF...');
  const pdfPath = join(__dirname, '..', 'public', 'landing-page-gustavo.pdf');
  
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0',
      right: '0',
      bottom: '0',
      left: '0'
    },
    scale: 0.7
  });
  
  console.log(`PDF gerado com sucesso: ${pdfPath}`);
  
  await browser.close();
}

generatePDF().catch(console.error);
