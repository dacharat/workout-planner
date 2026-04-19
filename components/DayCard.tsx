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
        className={`flex min-h-[320px] flex-col rounded-2xl border p-4 transition ${
          isRest
            ? 'border-dashed border-line bg-panel-2/50'
            : 'border-line bg-panel'
        }`}
      >
        <header className="mb-3 flex items-baseline justify-between">
          <div>
            <div className="font-mono text-[10px] tracking-[0.14em] text-fg-dim">
              {day.toUpperCase()}
            </div>
            <h2 className="font-display text-base font-semibold leading-tight tracking-tight text-fg">
              {DAY_LABELS[day]}
            </h2>
            <p className="mt-0.5 text-[11px] text-fg-muted">
              {isRest
                ? 'Rest day'
                : `${entries.length} ${entries.length === 1 ? 'exercise' : 'exercises'} · ${totalSets} sets`}
            </p>
          </div>
          {!isRest && entries.length > 0 && (
            <button
              type="button"
              onClick={() => clearDay(day)}
              className="text-[11px] text-fg-dim transition hover:text-danger"
            >
              Clear
            </button>
          )}
        </header>

        {isRest ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line p-6 text-center">
            <span className="text-2xl" aria-hidden>
              💤
            </span>
            <p className="text-[11px] text-fg-muted">
              Taking it easy today.
              {entries.length > 0 && (
                <>
                  <br />
                  <span className="text-[10px] text-fg-dim">
                    ({entries.length} saved{' '}
                    {entries.length === 1 ? 'exercise' : 'exercises'} hidden)
                  </span>
                </>
              )}
            </p>
          </div>
        ) : (
          <div className="flex-1 space-y-2">
            {entries.length === 0 ? (
              <div className="rounded-lg border border-dashed border-line p-4 text-center text-[11px] text-fg-muted">
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
              className="inline-flex h-9 flex-1 items-center justify-center rounded-lg border border-line bg-panel-2 text-[13px] font-medium text-fg transition hover:border-line-2"
            >
              + Add exercise
            </button>
          )}
          <button
            type="button"
            onClick={() => toggleRest(day)}
            aria-pressed={isRest}
            className={`inline-flex h-9 items-center justify-center rounded-lg border px-3 text-[13px] font-medium transition ${
              isRest
                ? 'flex-1 border-accent bg-accent text-accent-ink'
                : 'border-line bg-panel-2 text-fg-muted hover:text-fg'
            }`}
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
