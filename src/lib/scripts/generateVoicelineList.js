import fs from 'fs';
import path from 'path';

const baseDir = path.join('public', 'assets', 'voicelines');
const outputFile = 'voicelines.txt';

function collectVoicelines(dirPath) {
  const characters = fs.readdirSync(dirPath);
  const result = [];

  characters.forEach((character) => {
    const charPath = path.join(dirPath, character);
    if (fs.statSync(charPath).isDirectory()) {
      const files = fs
        .readdirSync(charPath)
        .filter((file) => file.endsWith('.ogg'))
        .map((file) => path.parse(file).name); // remove extension
      if (files.length > 0) {
        result.push(`${character} - ${files.join(',\n                ')}`);
      }
    }
  });

  return result.join('\n\n');
}

const output = collectVoicelines(baseDir);
fs.writeFileSync(outputFile, output, 'utf8');

console.log(`✅ Voicelines list generated in ${outputFile}`);
