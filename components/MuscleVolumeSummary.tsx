'use client';

import { useMemo } from 'react';
import { usePlan } from '@/lib/plan-context';
import {
  STATUS_STYLES,
  VOLUME_MAX,
  computeMuscleVolume,
  formatMuscleLabel,
  getStatus,
} from '@/lib/volume';
import { BodyMap } from './BodyMap';

export function MuscleVolumeSummary() {
  const { plan, restDays } = usePlan();
  const volume = useMemo(
    () => computeMuscleVolume(plan, restDays),
    [plan, restDays],
  );
  const rows = useMemo(
    () =>
      Object.entries(volume)
        .map(([muscle, sets]) => ({ muscle, sets }))
        .sort((a, b) => b.sets - a.sets),
    [volume],
  );

  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <header className="mb-3">
        <h2 className="text-sm font-semibold">Weekly Muscle Volume</h2>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Target: 10–20 sets per muscle per week.
        </p>
      </header>

      <div className="mb-4">
        <BodyMap volume={volume} />
      </div>

      {rows.length === 0 ? (
        <div className="rounded-lg border border-dashed border-neutral-300 p-4 text-center text-xs text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
          Add exercises to see your volume here.
        </div>
      ) : (
        <ul className="space-y-3">
          {rows.map(({ muscle, sets }) => {
            const status = getStatus(sets);
            const style = STATUS_STYLES[status];
            const pct = Math.min(100, (sets / VOLUME_MAX) * 100);
            return (
              <li key={muscle}>
                <div className="mb-1 flex items-center justify-between gap-2 text-xs">
                  <span className="font-medium">{formatMuscleLabel(muscle)}</span>
                  <div className="flex items-center gap-2">
                    <span className="tabular-nums text-neutral-600 dark:text-neutral-300">
                      {sets} sets
                    </span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${style.badge}`}
                    >
                      {style.label}
                    </span>
                  </div>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                  <div
                    className={`h-full rounded-full transition-[width] ${style.bar}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
