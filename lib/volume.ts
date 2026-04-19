import { exerciseById } from '@/data/exercises';
import { DAYS, type DayKey } from './constants';
import type { RestDays, WeeklyPlan } from './plan-context';

export type VolumeStatus = 'low' | 'optimal' | 'high';

export const VOLUME_MAX = 25;

/**
 * Secondary muscles (synergists / stabilizers) receive partial credit in
 * volume calculations. 0.5 is a reasonable default: hypertrophy literature
 * commonly counts assistance work at roughly half of direct work.
 */
export const SECONDARY_WEIGHT = 0.5;

/** Per-muscle breakdown from the plan. */
export type MuscleBreakdown = {
  /** Raw sets from exercises that list the muscle as a primary mover. */
  main: number;
  /** Raw sets from exercises that list the muscle as a secondary mover. */
  secondary: number;
  /** main + SECONDARY_WEIGHT * secondary (used for status + bar + body map). */
  weighted: number;
};

function addTo(
  acc: Record<string, MuscleBreakdown>,
  muscle: string,
  sets: number,
  kind: 'main' | 'secondary',
) {
  const entry = acc[muscle] ?? { main: 0, secondary: 0, weighted: 0 };
  if (kind === 'main') {
    entry.main += sets;
    entry.weighted += sets;
  } else {
    entry.secondary += sets;
    entry.weighted += sets * SECONDARY_WEIGHT;
  }
  acc[muscle] = entry;
}

export function computeMuscleVolume(
  plan: WeeklyPlan,
  restDays?: RestDays,
  dayFilter?: DayKey[],
): Record<string, MuscleBreakdown> {
  const volume: Record<string, MuscleBreakdown> = {};
  const allowed = dayFilter && dayFilter.length > 0 ? new Set(dayFilter) : null;
  for (const day of DAYS) {
    if (restDays?.[day]) continue;
    if (allowed && !allowed.has(day)) continue;
    for (const entry of plan[day]) {
      const exercise = exerciseById[entry.id];
      if (!exercise) continue;
      for (const muscle of exercise.musclesMain) {
        addTo(volume, muscle, entry.sets, 'main');
      }
      for (const muscle of exercise.musclesSecondary) {
        addTo(volume, muscle, entry.sets, 'secondary');
      }
    }
  }
  return volume;
}

export function getStatus(weighted: number): VolumeStatus {
  if (weighted < 10) return 'low';
  if (weighted <= 20) return 'optimal';
  return 'high';
}

export const STATUS_STYLES: Record<VolumeStatus, { bar: string; badge: string; label: string }> = {
  low: {
    bar: 'bg-amber-500',
    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
    label: 'Low',
  },
  optimal: {
    bar: 'bg-emerald-500',
    badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
    label: 'Optimal',
  },
  high: {
    bar: 'bg-rose-500',
    badge: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300',
    label: 'High',
  },
};

export function formatMuscleLabel(muscle: string): string {
  return muscle
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/** Format a weighted number like `12` or `12.5` (trim trailing .0). */
export function formatWeighted(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

/** High-level muscle groups for the chart view. Values are dataset muscle keys. */
export const MUSCLE_GROUPS: { label: string; muscles: string[] }[] = [
  {
    label: 'Chest',
    muscles: ['chest', 'upper_chest', 'lower_chest', 'serratus_anterior'],
  },
  {
    label: 'Back',
    muscles: ['back', 'upper_back', 'lower_back', 'lats', 'lat', 'traps', 'mid_traps', 'rhomboids'],
  },
  {
    label: 'Shoulders',
    muscles: ['shoulders', 'rear_delts', 'rear_deltoids', 'front_delts', 'side_delts'],
  },
  {
    label: 'Arms',
    muscles: ['biceps', 'triceps', 'forearms', 'brachialis'],
  },
  {
    label: 'Legs',
    muscles: [
      'quads',
      'hamstrings',
      'glutes',
      'glute_medius',
      'calves',
      'adductors',
      'abductors',
      'inner_thigh',
      'tibialis_anterior',
    ],
  },
  {
    label: 'Core',
    muscles: ['abs', 'lower_abs', 'core', 'obliques'],
  },
];

/** Volume target range (weighted sets/week) — applies to every muscle group. */
export const VOLUME_TARGET: [number, number] = [10, 20];

/** Sum weighted volume across the muscles in a group. */
export function computeGroupVolume(
  volume: Record<string, MuscleBreakdown>,
  muscles: string[],
): number {
  let total = 0;
  for (const m of muscles) {
    total += volume[m]?.weighted ?? 0;
  }
  return total;
}
