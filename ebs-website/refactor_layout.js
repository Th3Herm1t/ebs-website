const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src/app/[locale]');
let changedFiles = 0;

files.forEach(file => {
  // Skip layout.tsx
  if (file.endsWith('layout.tsx')) return;

  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Remove imports
  content = content.replace(/import TopBar from ["']@\/components\/layout\/TopBar["'];?[\r\n]*/g, '');
  content = content.replace(/import Header from ["']@\/components\/layout\/Header["'];?[\r\n]*/g, '');
  content = content.replace(/import Header2 from ["']@\/components\/layout\/Header2["'];?[\r\n]*/g, '');
  content = content.replace(/import Footer from ["']@\/components\/layout\/Footer["'];?[\r\n]*/g, '');

  // Remove component usages
  content = content.replace(/[ \t]*<TopBar\s*\/>[\r\n]*/g, '');
  content = content.replace(/[ \t]*<Header\s*\/>[\r\n]*/g, '');
  content = content.replace(/[ \t]*<Header2\s*\/>[\r\n]*/g, '');
  content = content.replace(/[ \t]*<Footer\s*\/>[\r\n]*/g, '');

  // Some components might have been used multiple times or had trailing spaces
  // The regex should catch them but just in case:
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changedFiles++;
    console.log('Cleaned up ' + file);
  }
});

console.log('Total page files cleaned up: ' + changedFiles);
