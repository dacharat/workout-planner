'use client';

import { exerciseById } from '@/data/exercises';
import { usePlan, type ExerciseEntry } from '@/lib/plan-context';
import type { DayKey } from '@/lib/constants';
import { formatMuscleLabel as formatLabel } from '@/lib/volume';

type Props = {
  day: DayKey;
  index: number;
  entry: ExerciseEntry;
};

export function ExerciseRow({ day, index, entry }: Props) {
  const { updateEntry, removeExercise } = usePlan();
  const exercise = exerciseById[entry.id];
  if (!exercise) return null;

  const handleNumberChange = (
    field: 'sets' | 'reps',
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const raw = Number(e.target.value);
    const value = Number.isFinite(raw)
      ? Math.max(1, Math.min(99, Math.floor(raw)))
      : 1;
    updateEntry(day, index, { [field]: value });
  };

  return (
    <div className="group rounded-lg border border-line bg-panel-2 p-2.5 text-sm">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="break-words text-[13px] font-medium leading-snug text-fg">
            {exercise.name}
          </div>
          <div className="mt-0.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[11px] text-fg-muted">
            {exercise.musclesMain.map((m) => (
              <span key={`main-${m}`} className="font-medium text-fg">
                {formatLabel(m)}
              </span>
            ))}
            {exercise.musclesSecondary.map((m) => (
              <span
                key={`sec-${m}`}
                className="text-fg-dim"
                title="Assisting muscle"
              >
                +{formatLabel(m)}
              </span>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => removeExercise(day, index)}
          aria-label={`Remove ${exercise.name}`}
          className="-mr-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-fg-dim transition hover:bg-panel-3 hover:text-danger"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] text-fg-muted">
        <label className="flex items-center gap-1">
          <span>Sets</span>
          <input
            type="number"
            min={1}
            max={99}
            value={entry.sets}
            onChange={(e) => handleNumberChange('sets', e)}
            className="h-7 w-10 rounded-md border border-line bg-panel px-1 text-center text-[13px] text-fg focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Sets"
          />
        </label>
        <span className="text-fg-dim">×</span>
        <label className="flex items-center gap-1">
          <span>Reps</span>
          <input
            type="number"
            min={1}
            max={99}
            value={entry.reps}
            onChange={(e) => handleNumberChange('reps', e)}
            className="h-7 w-10 rounded-md border border-line bg-panel px-1 text-center text-[13px] text-fg focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Reps"
          />
        </label>
      </div>
    </div>
  );
}
