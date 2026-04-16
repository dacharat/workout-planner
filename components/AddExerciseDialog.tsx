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
  const [query, setQuery] = useState('');

  // Reset tab when reopened
  useEffect(() => {
    if (open) setTab('library');
  }, [open]);

  const muscleOptions = useMemo(() => {
    const source =
      selectedMovement.length > 0
        ? exercises.filter((e) => selectedMovement.includes(e.movement))
        : exercises;
    return Array.from(new Set(source.flatMap((e) => e.muscles))).sort();
  }, [selectedMovement]);

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
      if (
        selectedMuscle.length > 0 &&
        !selectedMuscle.some((m) => e.muscles.includes(m))
      )
        return false;
      if (q && !e.name.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [selectedEquipment, selectedMovement, selectedMuscle, query]);

  if (!open) return null;

  const handleSelect = (exercise: Exercise) => {
    addExercise(day, { id: exercise.id, sets: 3, reps: 10 });
    onClose();
  };

  const tabClass = (active: boolean) =>
    `inline-flex h-8 items-center rounded-md px-3 text-xs font-medium transition ${
      active
        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
        : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800'
    }`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Add exercise to ${DAY_LABELS[day]}`}
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-950 sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4 dark:border-neutral-800">
          <div>
            <h2 className="text-base font-semibold">Add exercise</h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {DAY_LABELS[day]}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
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
          className="flex gap-1 border-b border-neutral-200 bg-neutral-50/50 px-5 py-2 dark:border-neutral-800 dark:bg-neutral-900/50"
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
                className="h-10 w-full rounded-lg border border-neutral-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:focus:ring-neutral-300"
              />
              <FilterBar
                equipmentOptions={equipmentOptions}
                muscleOptions={muscleOptions}
                selectedEquipment={selectedEquipment}
                selectedMovement={selectedMovement}
                selectedMuscle={selectedMuscle}
                onEquipmentChange={setSelectedEquipment}
                onMovementChange={setSelectedMovement}
                onMuscleChange={setSelectedMuscle}
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
