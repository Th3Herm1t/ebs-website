const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.json')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Replace different formats of the number
    content = content.replace(/\+216\s*53\s*355\s*196/g, '+216 55 582 843');
    content = content.replace(/21653355196/g, '21655582843');
    content = content.replace(/\+21653355196/g, '+21655582843');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
console.log("Done!");
