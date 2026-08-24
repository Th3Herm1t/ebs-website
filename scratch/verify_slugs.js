const fs = require('fs');

const ap = fs.readFileSync('src/lib/partenaires/academic-partners.ts', 'utf8');
const slugs = [...ap.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);

const pt = fs.readFileSync('src/lib/partenaires/partenaires.ts', 'utf8');
const keys = [...pt.matchAll(/^\s{2}(?:"([^"]+)"|(\w[\w-]*)):\s*\{/gm)].map(m => m[1] || m[2]);

console.log('academic-partners slugs:', slugs.join(', '));
console.log('partenaires keys:', keys.join(', '));
console.log('---');

let issues = 0;
for (const s of slugs) {
  if (!keys.includes(s)) {
    console.log('❌ MISSING from partenaires.ts:', s);
    issues++;
  }
}
for (const k of keys) {
  if (!slugs.includes(k)) {
    console.log('⚠️  NOT in academic-partners grid:', k);
  }
}

if (issues === 0) {
  console.log('✅ All academic-partners slugs have matching partenaires entries');
}

// Also check for duplicates
const seen = new Set();
for (const k of keys) {
  if (seen.has(k)) console.log('❌ DUPLICATE key in partenaires.ts:', k);
  seen.add(k);
}
