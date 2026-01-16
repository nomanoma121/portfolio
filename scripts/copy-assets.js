#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const srcDir = path.join(process.cwd(), 'src/content/assets/blogs');
const destDir = path.join(process.cwd(), 'public/images/blogs');

function copyDirectory(src, dest) {
  // 宛先ディレクトリが存在しない場合は作成
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // ディレクトリの場合は再帰的にコピー
      copyDirectory(srcPath, destPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${srcPath} -> ${destPath}`);
    }
  }
}

if (fs.existsSync(srcDir)) {
  console.log('Copying blog assets...');
  copyDirectory(srcDir, destDir);
  console.log('Blog assets copied successfully!');
} else {
  console.log('No blog assets directory found, skipping...');
}
