import { DAYS } from './constants';
import type {
  PlanState,
  ExerciseEntry,
  WeeklyPlan,
  RestDays,
} from './plan-context';
import { exerciseIds, exerciseIdToIndex } from '@/data/exercises';

const HASH_PREFIX = '#plan=';

/*
 * Wire format: [restBitmask, day0, ..., day6]
 *   - restBitmask: 7-bit, bit i = DAYS[i] is a rest day
 *   - each day: array of [exerciseIndex, sets, reps]
 *     exerciseIndex = position in data/exercises.ts `exercises` array
 *
 * NOTE: `exercises` array is effectively append-only — reordering or removing
 * entries breaks existing share links.
 */

type CompactEntry = [number, number, number];

function toCompact(state: PlanState): unknown[] {
  const bits = DAYS.reduce(
    (acc, d, i) => acc | (state.restDays[d] ? 1 << i : 0),
    0,
  );
  const dayArrays = DAYS.map((d) =>
    state.days[d]
      .map((e): CompactEntry | null => {
        const idx = exerciseIdToIndex[e.id];
        if (idx == null) return null;
        return [idx, e.sets, e.reps];
      })
      .filter((x): x is CompactEntry => x !== null),
  );
  return [bits, ...dayArrays];
}

function fromCompact(raw: unknown): PlanState | null {
  if (!Array.isArray(raw) || raw.length !== 8) {
    console.warn('[share] decode failed: expected array of length 8, got', raw);
    return null;
  }
  const [bits, ...dayArrs] = raw as [unknown, ...unknown[]];
  if (typeof bits !== 'number') {
    console.warn('[share] decode failed: bits is not a number', bits);
    return null;
  }

  const days = {} as WeeklyPlan;
  const restDays = {} as RestDays;

  for (let i = 0; i < 7; i++) {
    const d = DAYS[i];
    const arr = dayArrs[i];
    if (!Array.isArray(arr)) {
      console.warn(`[share] decode failed: day ${d} is not an array`, arr);
      return null;
    }

    const entries: ExerciseEntry[] = [];
    for (const t of arr) {
      if (!Array.isArray(t) || t.length !== 3) {
        console.warn(`[share] decode failed: entry not a 3-tuple in ${d}`, t);
        return null;
      }
      const [idx, s, r] = t as [unknown, unknown, unknown];
      if (
        typeof idx !== 'number' ||
        typeof s !== 'number' ||
        typeof r !== 'number'
      ) {
        console.warn(`[share] decode failed: entry types wrong in ${d}`, t);
        return null;
      }
      const id = exerciseIds[idx];
      if (!id) {
        console.warn(
          `[share] skipping entry in ${d}: index ${idx} out of range (max ${exerciseIds.length - 1})`,
        );
        continue;
      }
      entries.push({ id, sets: s, reps: r });
    }

    days[d] = entries;
    restDays[d] = (bits & (1 << i)) !== 0;
  }

  return { days, restDays };
}

function b64urlEncode(input: string): string {
  return btoa(unescape(encodeURIComponent(input)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function b64urlDecode(input: string): string {
  const pad = '==='.slice((input.length + 3) % 4);
  const base64 = input.replace(/-/g, '+').replace(/_/g, '/') + pad;
  return decodeURIComponent(escape(atob(base64)));
}

export function encodePlanState(state: PlanState): string {
  return b64urlEncode(JSON.stringify(toCompact(state)));
}

export function decodePlanState(encoded: string): PlanState | null {
  try {
    return fromCompact(JSON.parse(b64urlDecode(encoded)));
  } catch (err) {
    console.warn('[share] decode threw:', err, 'encoded:', encoded);
    return null;
  }
}

export function buildShareUrl(state: PlanState): string {
  const encoded = encodePlanState(state);
  const { origin, pathname, search } = window.location;
  return `${origin}${pathname}${search}${HASH_PREFIX}${encoded}`;
}

export function readSharedPlanFromHash(): PlanState | null {
  if (typeof window === 'undefined') return null;
  const hash = window.location.hash;
  if (!hash.startsWith(HASH_PREFIX)) return null;
  return decodePlanState(hash.slice(HASH_PREFIX.length));
}

export function clearShareHash(): void {
  if (typeof window === 'undefined') return;
  const { pathname, search } = window.location;
  window.history.replaceState(null, '', pathname + search);
}
