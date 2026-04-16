'use client';

import { useMemo } from 'react';
import { usePlan, type ExerciseEntry } from '@/lib/plan-context';
import { DAYS, DAY_LABELS, type DayKey } from '@/lib/constants';
import { exerciseById } from '@/data/exercises';

type Props = {
  targetDay: DayKey;
  onDone: () => void;
};

export function CopyFromDayPanel({ targetDay, onDone }: Props) {
  const { plan, restDays, addExercise, addExercises } = usePlan();

  const targetIds = useMemo(
    () => new Set(plan[targetDay].map((e) => e.id)),
    [plan, targetDay],
  );

  const sourceDays = DAYS.filter(
    (d) => d !== targetDay && plan[d].length > 0,
  );

  const handleCopyOne = (entry: ExerciseEntry) => {
    if (targetIds.has(entry.id)) return;
    addExercise(targetDay, { ...entry });
    onDone();
  };

  const handleCopyAll = (day: DayKey) => {
    const toCopy = plan[day]
      .filter((e) => !targetIds.has(e.id))
      .map((e) => ({ ...e }));
    if (toCopy.length === 0) return;
    addExercises(targetDay, toCopy);
    onDone();
  };

  if (sourceDays.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-neutral-300 p-6 text-center text-xs text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
        No other day has exercises yet. Add some to another day first, then come
        back to copy.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {sourceDays.map((day) => {
        const entries = plan[day];
        const totalSets = entries.reduce((s, e) => s + e.sets, 0);
        const copyable = entries.filter((e) => !targetIds.has(e.id));
        const isRest = restDays[day];
        return (
          <section
            key={day}
            className="rounded-lg border border-neutral-200 bg-neutral-50/50 p-3 dark:border-neutral-800 dark:bg-neutral-900/50"
          >
            <header className="mb-2 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold">
                  {DAY_LABELS[day]}
                  {isRest && (
                    <span className="ml-2 rounded bg-neutral-200 px-1.5 py-0.5 text-[10px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                      Rest
                    </span>
                  )}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {entries.length} exercises · {totalSets} sets
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleCopyAll(day)}
                disabled={copyable.length === 0}
                className="inline-flex h-8 items-center rounded-md bg-neutral-900 px-3 text-xs font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-500 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500"
              >
                Copy all ({copyable.length})
              </button>
            </header>

            <ul className="space-y-1">
              {entries.map((entry, idx) => {
                const exercise = exerciseById[entry.id];
                const name = exercise?.name ?? entry.id;
                const already = targetIds.has(entry.id);
                return (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleCopyOne(entry)}
                      disabled={already}
                      className="flex w-full items-center justify-between gap-2 rounded-md border border-transparent bg-white px-2 py-1.5 text-left text-xs transition hover:border-neutral-300 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-transparent disabled:hover:bg-white dark:bg-neutral-950 dark:hover:border-neutral-700 dark:hover:bg-neutral-900 dark:disabled:hover:bg-neutral-950"
                    >
                      <span className="truncate">{name}</span>
                      <span className="flex shrink-0 items-center gap-2">
                        <span className="text-neutral-500 dark:text-neutral-400">
                          {entry.sets}×{entry.reps}
                        </span>
                        {already ? (
                          <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                            Already added
                          </span>
                        ) : (
                          <span className="text-neutral-400 dark:text-neutral-500">
                            +
                          </span>
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
