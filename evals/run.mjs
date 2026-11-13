// Scores Ask Angel answers against the rubric in cases.json.
// Usage: node evals/run.mjs            -> prototype answers
//        node evals/run.mjs --today    -> today's answers (only the questions that were tested)
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const code = fs.readFileSync(path.join(here, '../site/js/data/answers.js'), 'utf8');
const ctx = {};
vm.createContext(ctx);
const { QA, TODAY_QA } = vm.runInContext(code + '\n;({ QA, TODAY_QA })', ctx);

const { cases, bannedPatterns } = JSON.parse(fs.readFileSync(path.join(here, 'cases.json'), 'utf8'));
const today = process.argv.includes('--today');
const db = today ? TODAY_QA : QA;
const banned = bannedPatterns.map(p => new RegExp(p, 'i'));

function score(c) {
  const item = db[c.id];
  if (!item) return null;
  if (today && c.lang !== 'en') return null; // today's assistant was only tested in English
  const i = c.lang === 'hi' ? 1 : 0;
  const text = item.a[i];
  const sentences = text.split(/[.!?।]+/).map(s => s.trim()).filter(Boolean);
  const avgWords = sentences.reduce((n, s) => n + s.split(/\s+/).length, 0) / sentences.length;
  return {
    q: item.q[i],
    C: c.mustInclude.every(f => text.toLowerCase().includes(f.toLowerCase())),
    S: !c.needsSource || Boolean(item.src),
    A: !banned.some(r => r.test(text)),
    P: avgWords <= 25,
    N: text.toLowerCase().includes(c.nextStep.toLowerCase()) || Boolean(item.remind)
  };
}

const rows = cases.map(score).filter(Boolean);
const keys = ['C', 'S', 'A', 'P', 'N'];
const passAll = rows.filter(r => keys.every(k => r[k])).length;
const mark = v => (v ? 'pass' : 'FAIL');

const lines = [
  `# Ask Angel evals: ${today ? "today's assistant" : 'prototype answers'}`,
  '',
  `${passAll} of ${rows.length} answers pass all five checks.`,
  '',
  '| Question | C | S | A | P | N |',
  '|---|---|---|---|---|---|',
  ...rows.map(r => `| ${r.q} | ${keys.map(k => mark(r[k])).join(' | ')} |`),
  '',
  'C correct · S sourced · A no advice · P plain words · N next step'
];
console.log(lines.join('\n'));
fs.writeFileSync(path.join(here, today ? 'results-today.md' : 'results.md'), lines.join('\n') + '\n');
process.exitCode = !today && passAll < rows.length ? 1 : 0;
