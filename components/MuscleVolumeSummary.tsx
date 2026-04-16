'use client';

import { useMemo, useState } from 'react';
import { usePlan } from '@/lib/plan-context';
import {
  STATUS_STYLES,
  VOLUME_MAX,
  computeMuscleVolume,
  formatMuscleLabel,
  getStatus,
} from '@/lib/volume';
import { BodyMap } from './BodyMap';
import { DAYS, type DayKey } from '@/lib/constants';

const chipBase =
  'inline-flex h-6 items-center rounded-full border px-2 text-[10px] font-semibold uppercase tracking-wide transition';
const chipInactive =
  'border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800';
const chipActive =
  'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900';

function toggle<T>(arr: T[], value: T): T[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

export function MuscleVolumeSummary() {
  const { plan, restDays } = usePlan();
  const [selectedDays, setSelectedDays] = useState<DayKey[]>([]);

  const volume = useMemo(
    () => computeMuscleVolume(plan, restDays, selectedDays),
    [plan, restDays, selectedDays],
  );

  const rows = useMemo(
    () =>
      Object.entries(volume)
        .map(([muscle, sets]) => ({ muscle, sets }))
        .sort((a, b) => b.sets - a.sets),
    [volume],
  );

  const scopeLabel =
    selectedDays.length === 0
      ? 'All week'
      : selectedDays
          .slice()
          .sort((a, b) => DAYS.indexOf(a) - DAYS.indexOf(b))
          .join(', ');

  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <header className="mb-3">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-sm font-semibold">Muscle Volume</h2>
          {selectedDays.length > 0 && (
            <button
              type="button"
              onClick={() => setSelectedDays([])}
              className="text-[10px] font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Reset days
            </button>
          )}
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Showing: {scopeLabel} · Target 10–20 sets/muscle/week
        </p>
      </header>

      <div className="mb-3 flex flex-wrap gap-1">
        {DAYS.map((d) => {
          const active = selectedDays.includes(d);
          const isRest = restDays[d];
          return (
            <button
              key={d}
              type="button"
              onClick={() => setSelectedDays(toggle(selectedDays, d))}
              className={`${chipBase} ${active ? chipActive : chipInactive} ${
                isRest ? 'opacity-50' : ''
              }`}
              aria-pressed={active}
              title={isRest ? 'Rest day' : undefined}
            >
              {d}
            </button>
          );
        })}
      </div>

      <div className="mb-4">
        <BodyMap volume={volume} />
      </div>

      {rows.length === 0 ? (
        <div className="rounded-lg border border-dashed border-neutral-300 p-4 text-center text-xs text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
          {selectedDays.length > 0
            ? 'No exercises on the selected day(s).'
            : 'Add exercises to see your volume here.'}
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
