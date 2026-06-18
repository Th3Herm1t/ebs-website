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

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(/label:\s*['"]Voir nos programmes['"],\s*href:\s*['"]\/licences['"]/g, 'label: "Voir nos programmes", href: "/nos-programmes"');
    
    // Also replace in CtaSection if it's formatted slightly differently or across multiple lines
    newContent = newContent.replace(/label=\{"Voir nos programmes"\}\s*href=\{"\/licences"\}/g, 'label={"Voir nos programmes"} href={"/nos-programmes"}');
    
    // Check contact page string
    newContent = newContent.replace(/href: "\/licences"/g, function(match, offset, str) {
       // Only replace if it is preceded by "Voir nos programmes" somewhere nearby on the same line
       let lineStart = str.lastIndexOf('\n', offset);
       if(str.substring(lineStart, offset).includes('Voir nos programmes')) {
           return 'href: "/nos-programmes"';
       }
       return match;
    });

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
