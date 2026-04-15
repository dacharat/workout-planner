'use client';

import { MOVEMENTS } from '@/lib/constants';
import type { Movement } from '@/data/exercises';
import { formatMuscleLabel } from '@/lib/volume';

type Props = {
  equipmentOptions: string[];
  muscleOptions: string[];
  selectedEquipment: string | null;
  selectedMovement: Movement | null;
  selectedMuscle: string | null;
  onEquipmentChange: (value: string | null) => void;
  onMovementChange: (value: Movement | null) => void;
  onMuscleChange: (value: string | null) => void;
};

const chipBase =
  'inline-flex h-7 items-center rounded-full border px-3 text-xs font-medium transition';
const chipInactive =
  'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800';
const chipActive =
  'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900';

const sectionLabel =
  'mb-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400';

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
        <div className={sectionLabel}>Movement</div>
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            className={`${chipBase} ${selectedMovement === null ? chipActive : chipInactive}`}
            onClick={() => onMovementChange(null)}
          >
            All
          </button>
          {MOVEMENTS.map((m) => (
            <button
              key={m}
              type="button"
              className={`${chipBase} ${selectedMovement === m ? chipActive : chipInactive}`}
              onClick={() => onMovementChange(m)}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className={sectionLabel}>Muscle</div>
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            className={`${chipBase} ${selectedMuscle === null ? chipActive : chipInactive}`}
            onClick={() => onMuscleChange(null)}
          >
            All
          </button>
          {muscleOptions.map((m) => (
            <button
              key={m}
              type="button"
              className={`${chipBase} ${selectedMuscle === m ? chipActive : chipInactive}`}
              onClick={() => onMuscleChange(m)}
            >
              {formatMuscleLabel(m)}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className={sectionLabel}>Equipment</div>
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            className={`${chipBase} ${selectedEquipment === null ? chipActive : chipInactive}`}
            onClick={() => onEquipmentChange(null)}
          >
            All
          </button>
          {equipmentOptions.map((eq) => (
            <button
              key={eq}
              type="button"
              className={`${chipBase} ${selectedEquipment === eq ? chipActive : chipInactive}`}
              onClick={() => onEquipmentChange(eq)}
            >
              {eq}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
