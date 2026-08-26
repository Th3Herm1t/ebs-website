const fs = require('fs');
const path = require('path');
const https = require('https');

const SRC_DIR = path.join(__dirname, 'src');
const PUBLIC_IMG_DIR = path.join(__dirname, 'public', 'images', 'ebs-tn');

// Ensure target directory exists
if (!fs.existsSync(PUBLIC_IMG_DIR)) {
  fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
}

// Helper to recursively find all TS/TSX files
function getFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, files);
    } else if (fullPath.match(/\.(ts|tsx)$/)) {
      files.push(fullPath);
    }
  }
  return files;
}

// Helper to download an image
function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) {
      return resolve(); // Already downloaded
    }
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        fs.unlink(dest, () => {}); // Delete the file async
        reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // Delete the file async
      reject(err.message);
    });
  });
}

async function main() {
  const files = getFiles(SRC_DIR);
  const regex = /https:\/\/ebs\.tn\/wp-content\/uploads\/[0-9]{4}\/[0-9]{2}\/([a-zA-Z0-9_\-\.]+)/g;
  
  let totalDownloads = 0;
  let totalReplaces = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;
    let match;
    
    // Reset regex index
    regex.lastIndex = 0;

    // Collect all matches first to avoid issues during replacement
    const matches = [];
    while ((match = regex.exec(content)) !== null) {
      matches.push({ url: match[0], filename: match[1] });
    }

    if (matches.length > 0) {
      for (const m of matches) {
        const localFilename = m.filename;
        const localPath = path.join(PUBLIC_IMG_DIR, localFilename);
        const webPath = `/images/ebs-tn/${localFilename}`;

        try {
          console.log(`Downloading: ${m.url}`);
          await downloadImage(m.url, localPath);
          totalDownloads++;

          // Replace in content
          // We use split and join to replace all occurrences globally without regex escaping issues
          const parts = content.split(m.url);
          if (parts.length > 1) {
            content = parts.join(webPath);
            hasChanges = true;
            totalReplaces++;
          }
        } catch (err) {
          console.error(`Failed to download ${m.url}:`, err);
        }
      }

      if (hasChanges) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated: ${file}`);
      }
    }
  }

  console.log(`Done! Downloaded ${totalDownloads} images and replaced ${totalReplaces} URLs.`);
}

main().catch(console.error);
