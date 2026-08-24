const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'markdown_guides');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  // Regex to remove markdown images with base64 data
  content = content.replace(/!\[.*?\]\(data:image\/[^;]+;base64,[^\)]+\)/g, '');
  // Also remove standard image links just in case
  content = content.replace(/!\[.*?\]\(.*?\)/g, '');
  fs.writeFileSync(filePath, content);
  console.log(`Stripped images from ${file}`);
}
