import fs from 'fs';
import path from 'path';

const inputFile = 'voicelines.txt';
const outputDir = 'Voicelines';

// Make sure the output folder exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Read the original text file
const content = fs.readFileSync(inputFile, 'utf8');

// Split by double line breaks (between characters)
const sections = content.split(/\n\s*\n/);

sections.forEach((section) => {
  // Extract the character name (before " - ")
  const match = section.match(/^([^-]+)\s*-\s*(.+)$/s);
  if (match) {
    const character = match[1].trim();
    const lines = match[2]
      .split(/,\s*|\n+/)
      .map((line) => line.trim())
      .filter(Boolean);

    const outputPath = path.join(outputDir, `${character}.txt`);
    fs.writeFileSync(outputPath, lines.join('\n'), 'utf8');
    console.log(`✅ Created ${character}.txt with ${lines.length} entries`);
  }
});

console.log("\n✨ Restoration complete! Check the 'Voicelines' folder.");
