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

// Copy all HTML files from src/pages/
const srcPagesDir = path.join(__dirname, 'src', 'pages');

if (fs.existsSync(srcPagesDir)) {
  const htmlFiles = fs.readdirSync(srcPagesDir).filter(file => file.endsWith('.html'));

  htmlFiles.forEach(file => {
    const srcFile = path.join(srcPagesDir, file);
    const distFile = path.join(distDir, file);

    if (fs.existsSync(srcFile)) {
      fs.copyFileSync(srcFile, distFile);
      console.log(`✅ ${file} copied to dist/${file}`);
    }
  });

  console.log(`✅ ${htmlFiles.length} HTML files copied`);
} else {
  console.log('⚠️  No src/pages directory found');
}

// Copy partials to dist/
const partialsDir = path.join(__dirname, 'partials');

if (fs.existsSync(partialsDir)) {
  const partialFiles = fs.readdirSync(partialsDir).filter(file => file.endsWith('.html'));

  // Create partials directory in dist/
  const distPartialsDir = path.join(distDir, 'partials');
  if (!fs.existsSync(distPartialsDir)) {
    fs.mkdirSync(distPartialsDir, { recursive: true });
  }

  partialFiles.forEach(file => {
    const srcFile = path.join(partialsDir, file);
    const distFile = path.join(distPartialsDir, file);

    if (fs.existsSync(srcFile)) {
      fs.copyFileSync(srcFile, distFile);
      console.log(`✅ partials/${file} copied`);
    }
  });

  console.log(`✅ ${partialFiles.length} partial files copied`);
} else {
  console.log('⚠️  No partials directory found');
}

// Also copy src/js directory
const srcJsDir = path.join(__dirname, 'src', 'js');

if (fs.existsSync(srcJsDir)) {
  const distJsDir = path.join(distDir, 'src', 'js');
  if (!fs.existsSync(distJsDir)) {
    fs.mkdirSync(distJsDir, { recursive: true });
  }

  const jsFiles = fs.readdirSync(srcJsDir).filter(file => file.endsWith('.js'));

  jsFiles.forEach(file => {
    const srcFile = path.join(srcJsDir, file);
    const distFile = path.join(distJsDir, file);

    if (fs.existsSync(srcFile)) {
      fs.copyFileSync(srcFile, distFile);
      console.log(`✅ src/js/${file} copied`);
    }
  });

  console.log(`✅ ${jsFiles.length} JS files copied`);
}

console.log('🎉 Build complete!');