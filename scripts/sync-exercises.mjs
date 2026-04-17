#!/usr/bin/env node
// Sync data/{push,pull,legs,core}_exercises -> data/exercises.ts
//
// CSVs are the authoring source of truth, split by movement category for
// easier editing. This script concatenates them in a fixed order (push,
// pull, legs, core) and regenerates exercises.ts so TypeScript can consume
// a strongly-typed, tree-shakable module at build time (no runtime fetch —
// works under static export).
//
// Invariant: share links encode each entry's POSITION in the `exercises`
// array. Positions are determined by:
//   1) the fixed file order below, then
//   2) the row order within each CSV.
// To keep existing share links working, NEW rows must be APPENDED to the
// END of their CSV — never insert, reorder, or delete.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const TS_PATH = path.join(DATA_DIR, 'exercises.ts');

/**
 * Source CSVs in canonical order. Each entry declares the expected movement
 * value for every row in that file — a mismatch aborts the sync so rows
 * can't silently drift into the wrong category.
 */
const SOURCES = [
  { file: 'push_exercise.csv', movement: 'push' },
  { file: 'pull_exercise.csv', movement: 'pull' },
  { file: 'legs_exercises.csv', movement: 'legs' },
  { file: 'core_exercises.csv', movement: 'core' },
];

const ALLOWED_MOVEMENTS = new Set(SOURCES.map((s) => s.movement));

/** Parse a CSV text into an array of string[] rows. Handles quoted fields. */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') {
        cur += '"';
        i++;
      } else if (c === '"') {
        inQuotes = false;
      } else {
        cur += c;
      }
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') {
        row.push(cur);
        cur = '';
      } else if (c === '\n') {
        row.push(cur);
        rows.push(row);
        row = [];
        cur = '';
      } else if (c === '\r') {
        // skip
      } else {
        cur += c;
      }
    }
  }
  if (cur !== '' || row.length > 0) {
    row.push(cur);
    rows.push(row);
  }
  return rows;
}

/** Parse a Python-style list like "['a', 'b']" or "" -> []. */
function parseList(raw) {
  const s = raw.trim();
  if (!s || s === '[]') return [];
  return [...s.matchAll(/'([^']*)'/g)].map((m) => m[1].trim()).filter(Boolean);
}

const EXPECTED_HEADER = [
  'id',
  'name',
  'muscles_main',
  'muscles_secondary',
  'equipment',
  'movement',
];

function loadSource(file, expectedMovement, seen) {
  const full = path.join(DATA_DIR, file);
  const text = fs.readFileSync(full, 'utf8');
  const rows = parseCsv(text).filter((r) => r.some((c) => c !== ''));
  const [header, ...dataRows] = rows;
  if (EXPECTED_HEADER.some((h, i) => header[i]?.trim() !== h)) {
    throw new Error(
      `${file}: unexpected header. Got: ${header.join(',')} | Expected: ${EXPECTED_HEADER.join(',')}`,
    );
  }

  return dataRows.map((r, lineIdx) => {
    const [id, name, main, secondary, equipment, movement] = r.map((c) =>
      c.trim(),
    );
    const where = `${file}:${lineIdx + 2}`;
    if (!id) throw new Error(`${where}: missing id`);
    if (seen.has(id)) throw new Error(`${where}: duplicate id "${id}"`);
    seen.add(id);
    if (!ALLOWED_MOVEMENTS.has(movement)) {
      throw new Error(
        `${where} (${id}): invalid movement "${movement}". Allowed: ${[...ALLOWED_MOVEMENTS].join(', ')}`,
      );
    }
    if (movement !== expectedMovement) {
      throw new Error(
        `${where} (${id}): movement "${movement}" does not match file category "${expectedMovement}"`,
      );
    }
    return {
      id,
      name,
      musclesMain: parseList(main),
      musclesSecondary: parseList(secondary),
      equipment: parseList(equipment),
      movement,
    };
  });
}

function main() {
  const seen = new Set();
  const exercises = SOURCES.flatMap((s) => loadSource(s.file, s.movement, seen));

  const header_comment = `// AUTO-GENERATED from data/{push,pull,legs,core}_*.csv by
// scripts/sync-exercises.mjs. Do not edit by hand.
// Run \`yarn sync-exercises\` after editing any source CSV.
//
// Share-link encoding uses the POSITION of each exercise in this array as a
// compact numeric index. Order is: all push rows, then pull, then legs,
// then core — row order within each file preserved. To keep existing share
// links working, APPEND new rows to the END of the appropriate CSV — never
// insert, reorder, or delete.
`;

  const body = `
export type Movement = 'push' | 'pull' | 'legs' | 'core';

export type Exercise = {
  id: string;
  name: string;
  /** Primary movers — count at full weight in volume calculations. */
  musclesMain: string[];
  /** Synergists / stabilizers — count at SECONDARY_WEIGHT. */
  musclesSecondary: string[];
  equipment: string[];
  movement: Movement;
};

export const exercises: Exercise[] = ${JSON.stringify(exercises, null, 2)};

export const exerciseById: Record<string, Exercise> = Object.fromEntries(
  exercises.map((e) => [e.id, e]),
);

export const exerciseIds: string[] = exercises.map((e) => e.id);

export const exerciseIdToIndex: Record<string, number> = Object.fromEntries(
  exercises.map((e, i) => [e.id, i]),
);
`;

  fs.writeFileSync(TS_PATH, header_comment + body, 'utf8');
  console.log(
    `sync-exercises: wrote ${exercises.length} exercises from ${SOURCES.length} CSV files -> ${path.relative(ROOT, TS_PATH)}`,
  );
}

main();
