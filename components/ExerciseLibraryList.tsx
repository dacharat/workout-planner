'use client';

import type { Exercise } from '@/data/exercises';

type Props = {
  items: Exercise[];
  selectedIds: Set<string>;
  onSelect: (exercise: Exercise) => void;
};

export function ExerciseLibraryList({ items, selectedIds, onSelect }: Props) {
  if (items.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-neutral-300 p-6 text-center text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
        No exercises match the selected filters.
      </div>
    );
  }

  return (
    <ul className="max-h-[50vh] space-y-1 overflow-y-auto pr-1">
      {items.map((exercise) => {
        const isSelected = selectedIds.has(exercise.id);
        return (
          <li key={exercise.id}>
            <button
              type="button"
              disabled={isSelected}
              onClick={() => onSelect(exercise)}
              aria-disabled={isSelected}
              className={`flex w-full items-start justify-between gap-3 rounded-lg border p-3 text-left text-sm transition ${
                isSelected
                  ? 'cursor-not-allowed border-neutral-200 bg-neutral-100 opacity-60 dark:border-neutral-800 dark:bg-neutral-900/50'
                  : 'border-neutral-200 bg-white hover:border-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-white dark:hover:bg-neutral-800'
              }`}
            >
              <div className="min-w-0 flex-1">
                <div className="break-words font-medium leading-snug">
                  {exercise.name}
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-1">
                  {exercise.musclesMain.map((m) => (
                    <span
                      key={`main-${m}`}
                      className="inline-flex items-center rounded-full bg-neutral-900 px-1.5 py-0.5 text-[10px] font-medium text-white dark:bg-neutral-100 dark:text-neutral-900"
                    >
                      {m.replace(/_/g, ' ')}
                    </span>
                  ))}
                  {exercise.musclesSecondary.map((m) => (
                    <span
                      key={`sec-${m}`}
                      title="Assisting muscle"
                      className="inline-flex items-center rounded-full border border-neutral-300 px-1.5 py-0.5 text-[10px] text-neutral-500 dark:border-neutral-700 dark:text-neutral-400"
                    >
                      +{m.replace(/_/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1">
                {isSelected ? (
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                    Selected
                  </span>
                ) : (
                  <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                    {exercise.movement}
                  </span>
                )}
                <span className="text-[10px] text-neutral-500 dark:text-neutral-400">
                  {exercise.equipment.join(' / ')}
                </span>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
