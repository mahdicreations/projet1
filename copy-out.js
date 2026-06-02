const fs = require('fs');
const path = require('path');

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const outDir = path.join(__dirname, 'out');
const rootDir = __dirname;

if (fs.existsSync(outDir)) {
  copyDirRecursive(outDir, rootDir);
  console.log('✨ Fichiers d\'export statiques copiés à la racine avec succès !');
} else {
  console.error('❌ Erreur : Dossier out/ introuvable. Veuillez compiler le projet d\'abord.');
  process.exit(1);
}
