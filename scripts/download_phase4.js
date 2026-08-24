const fs = require('fs');
const path = require('path');
const https = require('https');

const downloads = [
  { url: 'https://images.pexels.com/photos/8636603/pexels-photo-8636603.jpeg?auto=compress&cs=tinysrgb&w=800', dest: 'public/images/partenaires/corporate-1.jpg' },
  { url: 'https://images.pexels.com/photos/12903341/pexels-photo-12903341.jpeg?auto=compress&cs=tinysrgb&w=800', dest: 'public/images/partenaires/corporate-2.jpg' },
  { url: 'https://images.pexels.com/photos/7845079/pexels-photo-7845079.jpeg?auto=compress&cs=tinysrgb&w=800', dest: 'public/images/partenaires/corporate-3.jpg' },
  
  { url: 'https://images.pexels.com/photos/35689268/pexels-photo-35689268.jpeg?auto=compress&cs=tinysrgb&w=1200', dest: 'public/images/campus/sidi-bou-said.jpg' },
  
  { url: 'https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=1200', dest: 'public/images/campus/reception.jpg' },
];

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
        return;
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
  });
}

async function main() {
  console.log('Downloading Phase 4 images...');
  for (const img of downloads) {
    try {
      await downloadImage(img.url, path.join(__dirname, '..', img.dest));
      console.log('Downloaded:', img.dest);
    } catch (err) {
      console.error('Failed to download:', img.url, err.message);
    }
  }
  console.log('All Phase 4 downloads completed.');
}

main();
