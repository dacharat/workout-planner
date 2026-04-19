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
      <div className="rounded-lg border border-dashed border-line p-6 text-center text-sm text-fg-muted">
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
                  ? 'cursor-not-allowed border-line bg-panel-2 opacity-60'
                  : 'border-line bg-panel-2 hover:border-line-2 hover:bg-panel-3'
              }`}
            >
              <div className="min-w-0 flex-1">
                <div className="break-words font-medium leading-snug text-fg">
                  {exercise.name}
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-1">
                  {exercise.musclesMain.map((m) => (
                    <span
                      key={`main-${m}`}
                      className="inline-flex items-center rounded-full bg-accent px-1.5 py-0.5 text-[10px] font-medium text-accent-ink"
                    >
                      {m.replace(/_/g, ' ')}
                    </span>
                  ))}
                  {exercise.musclesSecondary.map((m) => (
                    <span
                      key={`sec-${m}`}
                      title="Assisting muscle"
                      className="inline-flex items-center rounded-full border border-line px-1.5 py-0.5 text-[10px] text-fg-muted"
                    >
                      +{m.replace(/_/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1">
                {isSelected ? (
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                  >
                    Selected
                  </span>
                ) : (
                  <span className="rounded-full bg-panel-3 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-fg-muted">
                    {exercise.movement}
                  </span>
                )}
                <span className="text-[10px] text-fg-dim">
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
