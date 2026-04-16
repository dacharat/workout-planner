import { exerciseById } from '@/data/exercises';
import { DAYS, type DayKey } from './constants';
import type { RestDays, WeeklyPlan } from './plan-context';

export type VolumeStatus = 'low' | 'optimal' | 'high';

export const VOLUME_MAX = 25;

export function computeMuscleVolume(
  plan: WeeklyPlan,
  restDays?: RestDays,
  dayFilter?: DayKey[],
): Record<string, number> {
  const volume: Record<string, number> = {};
  const allowed = dayFilter && dayFilter.length > 0 ? new Set(dayFilter) : null;
  for (const day of DAYS) {
    if (restDays?.[day]) continue;
    if (allowed && !allowed.has(day)) continue;
    for (const entry of plan[day]) {
      const exercise = exerciseById[entry.id];
      if (!exercise) continue;
      for (const muscle of exercise.muscles) {
        volume[muscle] = (volume[muscle] ?? 0) + entry.sets;
      }
    }
  }
  return volume;
}

export function getStatus(sets: number): VolumeStatus {
  if (sets < 10) return 'low';
  if (sets <= 20) return 'optimal';
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
