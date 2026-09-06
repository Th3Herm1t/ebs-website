import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const evidenceDir = path.resolve(__dirname, '../../ebs-brochure-content/evidence');
const outputDir = path.resolve(__dirname, '../public/assets');

fs.mkdirSync(outputDir, { recursive: true });

async function extract() {
  console.log('✂️ Extracting authentic high-res visual assets from evidence...');

  // 1. Finance Cover Student & Chart Inset (page 1)
  const finP1 = path.join(evidenceDir, 'licence-finance/page-01.jpg');
  if (fs.existsSync(finP1)) {
    const meta = await sharp(finP1).metadata();
    console.log(`Finance Page 1 dimensions: ${meta.width} x ${meta.height}`);
    
    // Right cutout image of finance analyst
    await sharp(finP1)
      .extract({ left: Math.floor(meta.width * 0.42), top: Math.floor(meta.height * 0.05), width: Math.floor(meta.width * 0.58), height: Math.floor(meta.height * 0.68) })
      .toFile(path.join(outputDir, 'finance-hero-student.png'));

    console.log('  ✓ Extracted finance-hero-student.png');
  }

  // 2. Finance Page 2 Student & Campus Building (page 2)
  const finP2 = path.join(evidenceDir, 'licence-finance/page-02.jpg');
  if (fs.existsSync(finP2)) {
    const meta = await sharp(finP2).metadata();
    await sharp(finP2)
      .extract({ left: Math.floor(meta.width * 0.48), top: 0, width: Math.floor(meta.width * 0.52), height: Math.floor(meta.height * 0.38) })
      .toFile(path.join(outputDir, 'finance-student-campus.png'));

    // Handshake internship inset
    await sharp(finP2)
      .extract({ left: Math.floor(meta.width * 0.74), top: Math.floor(meta.height * 0.43), width: Math.floor(meta.width * 0.24), height: Math.floor(meta.height * 0.16) })
      .toFile(path.join(outputDir, 'finance-handshake.png'));

    console.log('  ✓ Extracted finance-student-campus.png and finance-handshake.png');
  }

  // 3. Finance Page 3 Coin Pillars (page 3)
  const finP3 = path.join(evidenceDir, 'licence-finance/page-03.jpg');
  if (fs.existsSync(finP3)) {
    const meta = await sharp(finP3).metadata();
    await sharp(finP3)
      .extract({ left: Math.floor(meta.width * 0.48), top: 0, width: Math.floor(meta.width * 0.52), height: Math.floor(meta.height * 0.24) })
      .toFile(path.join(outputDir, 'finance-coin-pillars.png'));

    console.log('  ✓ Extracted finance-coin-pillars.png');
  }

  // 4. Finance Page 4 Women with tablet & Landmarks
  const finP4 = path.join(evidenceDir, 'licence-finance/page-04.jpg');
  if (fs.existsSync(finP4)) {
    const meta = await sharp(finP4).metadata();
    await sharp(finP4)
      .extract({ left: Math.floor(meta.width * 0.38), top: 0, width: Math.floor(meta.width * 0.62), height: Math.floor(meta.height * 0.36) })
      .toFile(path.join(outputDir, 'finance-tablet-students.png'));

    // Rome Landmark
    await sharp(finP4)
      .extract({ left: Math.floor(meta.width * 0.02), top: Math.floor(meta.height * 0.50), width: Math.floor(meta.width * 0.44), height: Math.floor(meta.height * 0.11) })
      .toFile(path.join(outputDir, 'landmark-rome.png'));

    // Paris Landmark
    await sharp(finP4)
      .extract({ left: Math.floor(meta.width * 0.02), top: Math.floor(meta.height * 0.62), width: Math.floor(meta.width * 0.44), height: Math.floor(meta.height * 0.11) })
      .toFile(path.join(outputDir, 'landmark-paris.png'));

    // Toronto Landmark
    await sharp(finP4)
      .extract({ left: Math.floor(meta.width * 0.02), top: Math.floor(meta.height * 0.74), width: Math.floor(meta.width * 0.44), height: Math.floor(meta.height * 0.11) })
      .toFile(path.join(outputDir, 'landmark-toronto.png'));

    console.log('  ✓ Extracted finance-tablet-students.png, Rome, Paris, Toronto landmarks');
  }

  // 5. Informatique Cover Student & Glowing AI Brain
  const infoP1 = path.join(evidenceDir, 'licence-informatique/page-01.jpg');
  if (fs.existsSync(infoP1)) {
    const meta = await sharp(infoP1).metadata();
    await sharp(infoP1)
      .extract({ left: Math.floor(meta.width * 0.38), top: Math.floor(meta.height * 0.18), width: Math.floor(meta.width * 0.62), height: Math.floor(meta.height * 0.64) })
      .toFile(path.join(outputDir, 'info-hero-student.png'));

    console.log('  ✓ Extracted info-hero-student.png');
  }

  // 6. Informatique Page 2 Motherboard & Circuit
  const infoP2 = path.join(evidenceDir, 'licence-informatique/page-02.jpg');
  if (fs.existsSync(infoP2)) {
    const meta = await sharp(infoP2).metadata();
    await sharp(infoP2)
      .extract({ left: Math.floor(meta.width * 0.58), top: 0, width: Math.floor(meta.width * 0.42), height: Math.floor(meta.height * 0.22) })
      .toFile(path.join(outputDir, 'info-chip-circuit.png'));

    console.log('  ✓ Extracted info-chip-circuit.png');
  }

  // 7. Informatique Page 3 Pair programming & AI / Cyber banners
  const infoP3 = path.join(evidenceDir, 'licence-informatique/page-03.jpg');
  if (fs.existsSync(infoP3)) {
    const meta = await sharp(infoP3).metadata();
    await sharp(infoP3)
      .extract({ left: Math.floor(meta.width * 0.64), top: 0, width: Math.floor(meta.width * 0.36), height: Math.floor(meta.height * 0.36) })
      .toFile(path.join(outputDir, 'info-pair-programming.png'));

    console.log('  ✓ Extracted info-pair-programming.png');
  }

  // 8. Informatique Page 4 Workstation team
  const infoP4 = path.join(evidenceDir, 'licence-informatique/page-04.jpg');
  if (fs.existsSync(infoP4)) {
    const meta = await sharp(infoP4).metadata();
    await sharp(infoP4)
      .extract({ left: Math.floor(meta.width * 0.42), top: 0, width: Math.floor(meta.width * 0.58), height: Math.floor(meta.height * 0.36) })
      .toFile(path.join(outputDir, 'info-workstation-team.png'));

    console.log('  ✓ Extracted info-workstation-team.png');
  }

  // 9. CRM Master Cover Campus & 3D CRM node diagram
  const crmP1 = path.join(evidenceDir, 'master-crm-transformation-digitale/page-01.jpg');
  if (fs.existsSync(crmP1)) {
    const meta = await sharp(crmP1).metadata();
    await sharp(crmP1)
      .extract({ left: Math.floor(meta.width * 0.38), top: Math.floor(meta.height * 0.10), width: Math.floor(meta.width * 0.62), height: Math.floor(meta.height * 0.68) })
      .toFile(path.join(outputDir, 'crm-campus-hero.png'));

    console.log('  ✓ Extracted crm-campus-hero.png');
  }

  // 10. CRM Master Page 4 3D Dashboard & Tablet
  const crmP4 = path.join(evidenceDir, 'master-crm-transformation-digitale/page-04.jpg');
  if (fs.existsSync(crmP4)) {
    const meta = await sharp(crmP4).metadata();
    await sharp(crmP4)
      .extract({ left: Math.floor(meta.width * 0.42), top: Math.floor(meta.height * 0.05), width: Math.floor(meta.width * 0.40), height: Math.floor(meta.height * 0.38) })
      .toFile(path.join(outputDir, 'crm-dashboard-3d.png'));

    console.log('  ✓ Extracted crm-dashboard-3d.png');
  }

  console.log('✨ Asset extraction complete!');
}

extract().catch(console.error);
