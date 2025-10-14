import fs from 'fs';
import path from 'path';

const root = path.resolve(__dirname, '..');
const voicelinesDir = path.join(root, 'Voicelines');
const vlDbDir = path.join(root, 'src', 'lib', 'db', 'voice-lines');

function readVoicelineSet(filePath: string) {
  const txt = fs.readFileSync(filePath, 'utf8');
  return new Set(txt.split(/\r?\n/).map(s => s.trim()).filter(Boolean));
}

function collectDbAudioFiles(dir: string) {
  const res: {file: string; audios: string[]}[] = [];
  function walk(d: string) {
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) walk(full);
      else if (/\.ts$/.test(e.name)) {
        const txt = fs.readFileSync(full, 'utf8');
        const re = /audio:\s*'([^']+)'/g;
        const audios: string[] = [];
        let m;
        while ((m = re.exec(txt)) !== null) audios.push(m[1]);
        res.push({ file: path.relative(root, full), audios });
      }
    }
  }
  walk(dir);
  return res;
}

function main() {
  const vlFiles = fs.readdirSync(voicelinesDir).filter(f => f.endsWith('.txt'));
  const masterMap: Record<string, Set<string>> = {};
  for (const f of vlFiles) {
    const name = path.basename(f, '.txt').toLowerCase().replace(/ /g, '_');
    masterMap[name] = readVoicelineSet(path.join(voicelinesDir, f));
  }

  const dbFiles = collectDbAudioFiles(vlDbDir);

  const report: any[] = [];
  for (const db of dbFiles) {
    const base = path.basename(db.file, '.ts');
    const key = base.toLowerCase();
    const master = masterMap[key] || new Set();
    const missing: string[] = [];
    const unknown: string[] = [];
    for (const a of db.audios) {
      if (!master.has(a)) missing.push(a);
    }
    for (const a of master) if (!db.audios.includes(a)) unknown.push(a);
    report.push({ file: db.file, missing, extraInMaster: unknown.slice(0,10), countDb: db.audios.length, countMaster: master.size });
  }

  console.log(JSON.stringify(report, null, 2));
}

main();
