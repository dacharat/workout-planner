'use client';

import { useState } from 'react';
import { usePlan } from '@/lib/plan-context';
import { DAY_LABELS, type DayKey } from '@/lib/constants';
import { ExerciseRow } from './ExerciseRow';
import { AddExerciseDialog } from './AddExerciseDialog';

type Props = { day: DayKey };

export function DayCard({ day }: Props) {
  const { plan, restDays, clearDay, toggleRest } = usePlan();
  const [dialogOpen, setDialogOpen] = useState(false);
  const entries = plan[day];
  const isRest = restDays[day];
  const totalSets = entries.reduce((sum, e) => sum + e.sets, 0);

  return (
    <>
      <article
        className={`flex flex-col rounded-2xl border p-4 shadow-sm transition ${
          isRest
            ? 'border-dashed border-neutral-300 bg-neutral-100/50 dark:border-neutral-700 dark:bg-neutral-900/40'
            : 'border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900'
        }`}
      >
        <header className="mb-3 flex items-baseline justify-between">
          <div>
            <h2 className="text-sm font-semibold">{DAY_LABELS[day]}</h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {isRest
                ? 'Rest day'
                : `${entries.length} ${entries.length === 1 ? 'exercise' : 'exercises'} · ${totalSets} sets`}
            </p>
          </div>
          {!isRest && entries.length > 0 && (
            <button
              type="button"
              onClick={() => clearDay(day)}
              className="text-xs text-neutral-500 transition hover:text-rose-600 dark:text-neutral-400 dark:hover:text-rose-400"
            >
              Clear
            </button>
          )}
        </header>

        {isRest ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-neutral-300 p-6 text-center dark:border-neutral-700">
            <span className="text-2xl" aria-hidden>
              💤
            </span>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Taking it easy today.
              {entries.length > 0 && (
                <>
                  <br />
                  <span className="text-[10px]">
                    ({entries.length} saved {entries.length === 1 ? 'exercise' : 'exercises'} hidden)
                  </span>
                </>
              )}
            </p>
          </div>
        ) : (
          <div className="flex-1 space-y-2">
            {entries.length === 0 ? (
              <div className="rounded-lg border border-dashed border-neutral-300 p-4 text-center text-xs text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
                No exercises yet — add one or mark as rest day.
              </div>
            ) : (
              entries.map((entry, index) => (
                <ExerciseRow key={index} day={day} index={index} entry={entry} />
              ))
            )}
          </div>
        )}

        <div className="mt-3 flex gap-2">
          {!isRest && (
            <button
              type="button"
              onClick={() => setDialogOpen(true)}
              className="inline-flex h-9 flex-1 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:bg-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-white dark:hover:bg-neutral-800"
            >
              + Add exercise
            </button>
          )}
          <button
            type="button"
            onClick={() => toggleRest(day)}
            className={`inline-flex h-9 items-center justify-center rounded-lg border px-3 text-sm font-medium transition ${
              isRest
                ? 'flex-1 border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200'
                : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-neutral-100'
            }`}
            aria-pressed={isRest}
          >
            {isRest ? 'Resume training' : 'Rest day'}
          </button>
        </div>
      </article>

      <AddExerciseDialog
        day={day}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
}
