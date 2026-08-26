const fs = require('fs');
const path = require('path');
const https = require('https');

const downloads = [
  { url: 'https://images.pexels.com/photos/33750808/pexels-photo-33750808.jpeg?auto=compress&cs=tinysrgb&w=800', dest: 'public/images/campus/library.jpg' },
  { url: 'https://images.pexels.com/photos/5940705/pexels-photo-5940705.jpeg?auto=compress&cs=tinysrgb&w=800', dest: 'public/images/campus/labo.jpg' },
  { url: 'https://images.pexels.com/photos/6549862/pexels-photo-6549862.jpeg?auto=compress&cs=tinysrgb&w=800', dest: 'public/images/campus/detente.jpg' },
  { url: 'https://images.pexels.com/photos/16420473/pexels-photo-16420473.jpeg?auto=compress&cs=tinysrgb&w=800', dest: 'public/images/campus/polyvalente.jpg' },
  { url: 'https://images.unsplash.com/photo-1554911940-05efc1892bc5?q=80&w=800&auto=format', dest: 'public/images/campus/buvette.jpg' },
  { url: 'https://images.pexels.com/photos/17899295/pexels-photo-17899295.jpeg?auto=compress&cs=tinysrgb&w=1200', dest: 'public/images/campus/visite-360.jpg' },
  
  { url: 'https://images.pexels.com/photos/8199628/pexels-photo-8199628.jpeg?auto=compress&cs=tinysrgb&w=800', dest: 'public/images/partenaires/students-1.jpg' },
  { url: 'https://images.pexels.com/photos/6238120/pexels-photo-6238120.jpeg?auto=compress&cs=tinysrgb&w=800', dest: 'public/images/partenaires/students-2.jpg' },
  { url: 'https://images.pexels.com/photos/33265588/pexels-photo-33265588.jpeg?auto=compress&cs=tinysrgb&w=800', dest: 'public/images/partenaires/students-3.jpg' },
  
  { url: 'https://images.pexels.com/photos/8344900/pexels-photo-8344900.jpeg?auto=compress&cs=tinysrgb&w=800', dest: 'public/images/alumni/alumni-1.jpg' },
  { url: 'https://images.pexels.com/photos/10351367/pexels-photo-10351367.jpeg?auto=compress&cs=tinysrgb&w=800', dest: 'public/images/alumni/alumni-2.jpg' },
  { url: 'https://images.pexels.com/photos/38598139/pexels-photo-38598139.jpeg?auto=compress&cs=tinysrgb&w=800', dest: 'public/images/alumni/alumni-3.jpg' },
  { url: 'https://images.pexels.com/photos/8134081/pexels-photo-8134081.jpeg?auto=compress&cs=tinysrgb&w=800', dest: 'public/images/alumni/alumni-4.jpg' },
  
  { url: 'https://images.pexels.com/photos/8199762/pexels-photo-8199762.jpeg?auto=compress&cs=tinysrgb&w=1200', dest: 'public/images/programs/program-hero.jpg' }
];

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      // Follow redirects
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
  console.log('Downloading images...');
  for (const img of downloads) {
    try {
      await downloadImage(img.url, path.join(__dirname, '..', img.dest));
      console.log('Downloaded:', img.dest);
    } catch (err) {
      console.error('Failed to download:', img.url, err.message);
    }
  }
  console.log('All downloads completed.');
}

main();
