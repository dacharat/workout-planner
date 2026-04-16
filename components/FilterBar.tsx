'use client';

import { MOVEMENTS } from '@/lib/constants';
import type { Movement } from '@/data/exercises';
import { formatMuscleLabel } from '@/lib/volume';

type Props = {
  equipmentOptions: string[];
  muscleOptions: string[];
  selectedEquipment: string[];
  selectedMovement: Movement[];
  selectedMuscle: string[];
  onEquipmentChange: (value: string[]) => void;
  onMovementChange: (value: Movement[]) => void;
  onMuscleChange: (value: string[]) => void;
};

const chipBase =
  'inline-flex h-7 items-center rounded-full border px-3 text-xs font-medium transition';
const chipInactive =
  'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800';
const chipActive =
  'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900';

const sectionLabel =
  'mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400';

const clearBtn =
  'text-[10px] font-medium normal-case tracking-normal text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200';

function toggle<T>(arr: T[], value: T): T[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

export function FilterBar({
  equipmentOptions,
  muscleOptions,
  selectedEquipment,
  selectedMovement,
  selectedMuscle,
  onEquipmentChange,
  onMovementChange,
  onMuscleChange,
}: Props) {
  return (
    <div className="space-y-3">
      <div>
        <div className={sectionLabel}>
          <span>Movement</span>
          {selectedMovement.length > 0 && (
            <button type="button" className={clearBtn} onClick={() => onMovementChange([])}>
              Clear
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {MOVEMENTS.map((m) => {
            const active = selectedMovement.includes(m);
            return (
              <button
                key={m}
                type="button"
                className={`${chipBase} ${active ? chipActive : chipInactive}`}
                onClick={() => onMovementChange(toggle(selectedMovement, m))}
                aria-pressed={active}
              >
                {m.replace('_', ' ')}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <div className={sectionLabel}>
          <span>Muscle</span>
          {selectedMuscle.length > 0 && (
            <button type="button" className={clearBtn} onClick={() => onMuscleChange([])}>
              Clear
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {muscleOptions.map((m) => {
            const active = selectedMuscle.includes(m);
            return (
              <button
                key={m}
                type="button"
                className={`${chipBase} ${active ? chipActive : chipInactive}`}
                onClick={() => onMuscleChange(toggle(selectedMuscle, m))}
                aria-pressed={active}
              >
                {formatMuscleLabel(m)}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <div className={sectionLabel}>
          <span>Equipment</span>
          {selectedEquipment.length > 0 && (
            <button type="button" className={clearBtn} onClick={() => onEquipmentChange([])}>
              Clear
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {equipmentOptions.map((eq) => {
            const active = selectedEquipment.includes(eq);
            return (
              <button
                key={eq}
                type="button"
                className={`${chipBase} ${active ? chipActive : chipInactive}`}
                onClick={() => onEquipmentChange(toggle(selectedEquipment, eq))}
                aria-pressed={active}
              >
                {eq}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
