#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting dev server...\n');

// Run Tailwind watch in background
const distDir = path.join(__dirname, 'dist');
const srcCss = path.join(__dirname, 'src', 'css', 'style.css');

if (!fs.existsSync(srcCss)) {
  console.log('❌ No src/css/style.css found');
  process.exit(1);
}

console.log(`📁 Watching: ${srcCss}`);
console.log(`📂 Output: ${distDir}/main.css\n`);

// Start Tailwind in watch mode
const tailwindProcess = execSync(
  `npx tailwindcss -i ${srcCss} -o ${distDir}/main.css --watch --poll`,
  { stdio: 'inherit', shell: true }
);

module.exports = { tailwindProcess };
