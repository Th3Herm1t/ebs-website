const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../src/lib/partenaires/partenaires.ts');
let content = fs.readFileSync(file, 'utf8');

const regex = /\s*eklore: \{\s*slug: "eklore",\s*name: "Éklore-ed",[\s\S]*?Responsable marketing sportif",\s*\],\s*\},/;
content = content.replace(regex, '');

fs.writeFileSync(file, content);
console.log("Done.");
