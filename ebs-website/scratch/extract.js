const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const TurndownService = require('turndown');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const inputDir = path.resolve('..', '..', 'GUIDES PARTENAIRES ACADEMIQUES-20260824T060224Z-1-001', 'GUIDES PARTENAIRES ACADEMIQUES');
const outputDir = path.resolve(__dirname, 'markdown_guides');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const turndownService = new TurndownService({ headingStyle: 'atx' });
// Add a rule to handle tables properly in turndown
turndownService.addRule('table', {
  filter: 'table',
  replacement: function (content, node) {
    let markdownTable = '\n\n';
    const rows = node.querySelectorAll('tr');
    
    rows.forEach((row, i) => {
      const cols = row.querySelectorAll('th, td');
      let rowString = '|';
      let separator = '|';
      
      cols.forEach(col => {
        const text = col.textContent.replace(/\n/g, ' ').trim();
        rowString += ` ${text} |`;
        separator += ' --- |';
      });
      
      markdownTable += rowString + '\n';
      if (i === 0) {
        markdownTable += separator + '\n';
      }
    });
    
    return markdownTable + '\n\n';
  }
});

async function processFiles() {
  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.docx'));
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace('.docx', '.md'));
    
    console.log(`Processing ${file}...`);
    try {
      const result = await mammoth.convertToHtml({ path: inputPath });
      let html = result.value;
      
      // Use JSDOM to parse HTML and ensure tables are handled
      const dom = new JSDOM(html);
      
      const markdown = turndownService.turndown(dom.window.document.body);
      fs.writeFileSync(outputPath, markdown);
      console.log(`Saved to ${outputPath}`);
    } catch (e) {
      console.error(`Error processing ${file}:`, e);
    }
  }
}

processFiles();
