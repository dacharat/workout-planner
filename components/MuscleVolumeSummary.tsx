'use client';

import { useMemo, useState } from 'react';
import { usePlan } from '@/lib/plan-context';
import {
  STATUS_STYLES,
  VOLUME_MAX,
  computeMuscleVolume,
  formatMuscleLabel,
  formatWeighted,
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
        .map(([muscle, breakdown]) => ({ muscle, ...breakdown }))
        .sort((a, b) => b.weighted - a.weighted),
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
        <p className="mt-0.5 text-[10px] text-neutral-400 dark:text-neutral-500">
          Main muscles count fully; assisting muscles count at half.
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
          {rows.map(({ muscle, main, secondary, weighted }) => {
            const status = getStatus(weighted);
            const style = STATUS_STYLES[status];
            const pct = Math.min(100, (weighted / VOLUME_MAX) * 100);
            // Portion of the bar that comes from main vs assist, so users
            // can see at a glance when a muscle is only being hit indirectly.
            const mainPct = weighted > 0 ? (main / weighted) * 100 : 0;
            return (
              <li key={muscle}>
                <div className="mb-1 flex items-center justify-between gap-2 text-xs">
                  <span className="font-medium">{formatMuscleLabel(muscle)}</span>
                  <div className="flex items-center gap-2">
                    <span
                      className="tabular-nums text-neutral-600 dark:text-neutral-300"
                      title={`${main} main + ${secondary} assist × 0.5 = ${formatWeighted(weighted)}`}
                    >
                      {formatWeighted(weighted)} sets
                    </span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${style.badge}`}
                    >
                      {style.label}
                    </span>
                  </div>
                </div>
                <div className="relative h-2 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                  {/* Assist portion: full color at reduced opacity */}
                  <div
                    className={`absolute inset-y-0 left-0 ${style.bar} opacity-40`}
                    style={{ width: `${pct}%` }}
                  />
                  {/* Main portion overlaid on top at full opacity */}
                  <div
                    className={`absolute inset-y-0 left-0 ${style.bar}`}
                    style={{ width: `${(pct * mainPct) / 100}%` }}
                  />
                </div>
                {secondary > 0 && (
                  <div className="mt-0.5 text-[10px] text-neutral-400 dark:text-neutral-500">
                    {main} direct · {secondary} assist
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
