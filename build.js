import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔄 Build process...');

// Create directories
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy CSS
const srcCss = path.join(__dirname, 'src', 'css', 'style.css');
const distCss = path.join(distDir, 'main.css');

if (fs.existsSync(srcCss)) {
  fs.copyFileSync(srcCss, distCss);
  console.log('✅ CSS copied to dist/main.css');
} else {
  console.log('⚠️  No src/css/style.css found');
}

// Copy index.html
const srcIndex = path.join(__dirname, 'index.html');
const distIndex = path.join(distDir, 'index.html');
if (fs.existsSync(srcIndex)) {
  fs.copyFileSync(srcIndex, distIndex);
  console.log('✅ HTML copied to dist/index.html');
}

console.log('🎉 Build complete!');
