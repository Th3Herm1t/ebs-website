const fs = require('fs');
const path = require('path');

const files = [
  "src/app/[locale]/partenaires-academiques/page.tsx",
  "src/app/[locale]/recruter-nos-etudiants/page.tsx",
  "src/app/[locale]/partenaires-economiques/page.tsx",
  "src/app/[locale]/partenaires/[slug]/page.tsx",
  "src/app/[locale]/campus/page.tsx",
  "src/app/[locale]/alumni/page.tsx"
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes("https://formspree.io/f/xeojaqdr")) {
    console.log(`Processing ${file}...`);
    // Add import
    if (!content.includes('import { siteConfig }')) {
      const lastImportIndex = content.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        const endOfLastImport = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, endOfLastImport + 1) + 'import { siteConfig } from "@/lib/config";\n' + content.slice(endOfLastImport + 1);
      } else {
        content = 'import { siteConfig } from "@/lib/config";\n' + content;
      }
    }
    
    // Replace URL
    content = content.replace(/"https:\/\/formspree.io\/f\/xeojaqdr"/g, "siteConfig.webhookUrl");
    
    // Compute formId: for `partenaires/[slug]` -> `partenaires_slug`
    let formIdStr = path.dirname(file).replace("src/app/[locale]/", "").replace(/[^a-zA-Z0-9]/g, "_");
    
    // For FormData: `body: new FormData(e.currentTarget)`
    content = content.replace(/body:\s*new FormData\(e\.currentTarget\)/g, `body: (() => { const fd = new FormData(e.currentTarget); fd.append('formId', '${formIdStr}'); return fd; })()`);
    
    fs.writeFileSync(file, content, 'utf8');
  }
});
console.log("Done");
