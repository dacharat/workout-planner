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
  includeAssisting: boolean;
  onEquipmentChange: (value: string[]) => void;
  onMovementChange: (value: Movement[]) => void;
  onMuscleChange: (value: string[]) => void;
  onIncludeAssistingChange: (value: boolean) => void;
};

const chipBase =
  'inline-flex h-7 items-center rounded-full border px-3 text-xs font-medium transition';
const chipInactive = 'border-line bg-panel-2 text-fg hover:bg-panel-3';
const chipActive = 'border-accent bg-accent text-accent-ink';

const sectionLabel =
  'mb-1.5 flex items-center justify-between font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-fg-dim';

const clearBtn =
  'text-[10px] font-medium normal-case tracking-normal text-fg-dim hover:text-fg';

function toggle<T>(arr: T[], value: T): T[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

export function FilterBar({
  equipmentOptions,
  muscleOptions,
  selectedEquipment,
  selectedMovement,
  selectedMuscle,
  includeAssisting,
  onEquipmentChange,
  onMovementChange,
  onMuscleChange,
  onIncludeAssistingChange,
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
          <div className="flex items-center gap-3">
            <label className="flex cursor-pointer items-center gap-1 text-[10px] font-medium normal-case tracking-normal text-fg-muted hover:text-fg">
              <input
                type="checkbox"
                checked={includeAssisting}
                onChange={(e) => onIncludeAssistingChange(e.target.checked)}
                className="h-3 w-3 accent-[var(--accent)]"
              />
              Include assisting
            </label>
            {selectedMuscle.length > 0 && (
              <button type="button" className={clearBtn} onClick={() => onMuscleChange([])}>
                Clear
              </button>
            )}
          </div>
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
