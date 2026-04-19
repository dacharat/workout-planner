'use client';

import { useEffect, useMemo, useState } from 'react';
import { exercises, type Exercise, type Movement } from '@/data/exercises';
import { usePlan } from '@/lib/plan-context';
import type { DayKey } from '@/lib/constants';
import { DAY_LABELS } from '@/lib/constants';
import { FilterBar } from './FilterBar';
import { ExerciseLibraryList } from './ExerciseLibraryList';
import { CopyFromDayPanel } from './CopyFromDayPanel';

type Props = {
  day: DayKey;
  open: boolean;
  onClose: () => void;
};

type Tab = 'library' | 'copy';

const equipmentOptions = Array.from(
  new Set(exercises.flatMap((e) => e.equipment)),
).sort();

export function AddExerciseDialog({ day, open, onClose }: Props) {
  const { plan, addExercise } = usePlan();
  const [tab, setTab] = useState<Tab>('library');
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);
  const [selectedMovement, setSelectedMovement] = useState<Movement[]>([]);
  const [selectedMuscle, setSelectedMuscle] = useState<string[]>([]);
  const [includeAssisting, setIncludeAssisting] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (open) setTab('library');
  }, [open]);

  const muscleOptions = useMemo(() => {
    const source =
      selectedMovement.length > 0
        ? exercises.filter((e) => selectedMovement.includes(e.movement))
        : exercises;
    const muscles = source.flatMap((e) =>
      includeAssisting ? [...e.musclesMain, ...e.musclesSecondary] : e.musclesMain,
    );
    return Array.from(new Set(muscles)).sort();
  }, [selectedMovement, includeAssisting]);

  useEffect(() => {
    if (selectedMuscle.length === 0) return;
    const valid = new Set(muscleOptions);
    const next = selectedMuscle.filter((m) => valid.has(m));
    if (next.length !== selectedMuscle.length) setSelectedMuscle(next);
  }, [muscleOptions, selectedMuscle]);

  const selectedIds = useMemo(
    () => new Set(plan[day].map((e) => e.id)),
    [plan, day],
  );

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return exercises.filter((e) => {
      if (
        selectedEquipment.length > 0 &&
        !selectedEquipment.some((eq) => e.equipment.includes(eq))
      )
        return false;
      if (
        selectedMovement.length > 0 &&
        !selectedMovement.includes(e.movement)
      )
        return false;
      if (selectedMuscle.length > 0) {
        const pool = includeAssisting
          ? [...e.musclesMain, ...e.musclesSecondary]
          : e.musclesMain;
        if (!selectedMuscle.some((m) => pool.includes(m))) return false;
      }
      if (q && !e.name.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [selectedEquipment, selectedMovement, selectedMuscle, includeAssisting, query]);

  if (!open) return null;

  const handleSelect = (exercise: Exercise) => {
    addExercise(day, { id: exercise.id, sets: 4, reps: 12 });
    onClose();
  };

  const tabClass = (active: boolean) =>
    `inline-flex h-8 items-center rounded-md px-3 text-xs font-medium transition ${
      active
        ? 'bg-accent text-accent-ink'
        : 'text-fg-muted hover:bg-panel-3'
    }`;

  return (
    <div
      className="library-backdrop fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Add exercise to ${DAY_LABELS[day]}`}
      onClick={onClose}
    >
      <div
        className="library-modal flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-line bg-panel shadow-xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <div>
            <div className="font-mono text-[10px] tracking-[0.14em] text-fg-dim">
              ADD EXERCISE
            </div>
            <h2 className="font-display text-lg font-semibold tracking-tight text-fg">
              {DAY_LABELS[day]}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-fg-muted hover:bg-panel-3"
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
        <div
          role="tablist"
          aria-label="Add exercise source"
          className="flex gap-1 border-b border-line bg-panel-2 px-5 py-2"
        >
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'library'}
            className={tabClass(tab === 'library')}
            onClick={() => setTab('library')}
          >
            Library
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'copy'}
            className={tabClass(tab === 'copy')}
            onClick={() => setTab('copy')}
          >
            Copy from day
          </button>
        </div>
        <div className="space-y-4 overflow-y-auto px-5 py-4">
          {tab === 'library' ? (
            <>
              <input
                type="search"
                placeholder="Search exercises..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-10 w-full rounded-lg border border-line bg-panel-2 px-3 text-sm text-fg placeholder:text-fg-dim focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <FilterBar
                equipmentOptions={equipmentOptions}
                muscleOptions={muscleOptions}
                selectedEquipment={selectedEquipment}
                selectedMovement={selectedMovement}
                selectedMuscle={selectedMuscle}
                includeAssisting={includeAssisting}
                onEquipmentChange={setSelectedEquipment}
                onMovementChange={setSelectedMovement}
                onMuscleChange={setSelectedMuscle}
                onIncludeAssistingChange={setIncludeAssisting}
              />
              <ExerciseLibraryList
                items={filtered}
                selectedIds={selectedIds}
                onSelect={handleSelect}
              />
            </>
          ) : (
            <CopyFromDayPanel targetDay={day} onDone={onClose} />
          )}
        </div>
      </div>
    </div>
  );
}
