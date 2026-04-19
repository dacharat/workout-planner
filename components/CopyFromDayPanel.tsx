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

  const sourceDays = DAYS.filter((d) => d !== targetDay && plan[d].length > 0);

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
      <div className="rounded-lg border border-dashed border-line p-6 text-center text-xs text-fg-muted">
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
            className="rounded-lg border border-line bg-panel-2 p-3"
          >
            <header className="mb-2 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold text-fg">
                  {DAY_LABELS[day]}
                  {isRest && (
                    <span className="ml-2 rounded bg-panel-3 px-1.5 py-0.5 text-[10px] font-medium text-fg-muted">
                      Rest
                    </span>
                  )}
                </h3>
                <p className="text-xs text-fg-muted">
                  {entries.length} exercises · {totalSets} sets
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleCopyAll(day)}
                disabled={copyable.length === 0}
                className="inline-flex h-8 items-center rounded-md bg-accent px-3 text-xs font-medium text-accent-ink transition disabled:cursor-not-allowed disabled:bg-panel-3 disabled:text-fg-dim"
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
                      className="flex w-full items-center justify-between gap-2 rounded-md border border-transparent bg-panel px-2 py-1.5 text-left text-xs text-fg transition hover:border-line hover:bg-panel-3 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-transparent disabled:hover:bg-panel"
                    >
                      <span className="truncate">{name}</span>
                      <span className="flex shrink-0 items-center gap-2">
                        <span className="text-fg-muted">
                          {entry.sets}×{entry.reps}
                        </span>
                        {already ? (
                          <span
                            className="rounded px-1.5 py-0.5 text-[10px] font-medium"
                            style={{
                              background: 'var(--accent-soft)',
                              color: 'var(--accent)',
                            }}
                          >
                            Already added
                          </span>
                        ) : (
                          <span className="text-fg-dim">+</span>
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
