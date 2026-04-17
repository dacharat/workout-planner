'use client';

import { useMemo } from 'react';
import {
  anteriorMuscles,
  posteriorMuscles,
  type BodyMuscle,
  type MusclePolygons,
} from '@/lib/body-svg';
import {
  formatMuscleLabel,
  formatWeighted,
  getStatus,
  type MuscleBreakdown,
} from '@/lib/volume';

type Props = { volume: Record<string, MuscleBreakdown> };

// Map our dataset muscle keys -> anatomical muscle names (may be multiple).
const MUSCLE_MAP: Record<string, BodyMuscle[]> = {
  chest: ['chest'],
  upper_chest: ['chest'],
  lower_chest: ['chest'],
  shoulders: ['front-deltoids', 'back-deltoids'],
  front_delts: ['front-deltoids'],
  front_deltoids: ['front-deltoids'],
  rear_delts: ['back-deltoids'],
  rear_deltoids: ['back-deltoids'],
  biceps: ['biceps'],
  triceps: ['triceps'],
  forearms: ['forearm'],
  forearm: ['forearm'],
  back: ['upper-back', 'lower-back'],
  lats: ['upper-back'],
  upper_back: ['upper-back'],
  lower_back: ['lower-back'],
  traps: ['trapezius'],
  trapezius: ['trapezius'],
  neck: ['neck'],
  core: ['abs'],
  abs: ['abs'],
  obliques: ['obliques'],
  quads: ['quadriceps'],
  quadriceps: ['quadriceps'],
  hamstrings: ['hamstring'],
  hamstring: ['hamstring'],
  calves: ['calves', 'left-soleus', 'right-soleus'],
  glutes: ['gluteal'],
  gluteal: ['gluteal'],
  inner_thigh: ['adductor'],
  adductors: ['adductor'],
  abductors: ['abductors'],
};

type Intensity = 0 | 1 | 2 | 3;

const STATUS_INTENSITY: Record<'low' | 'optimal' | 'high', Intensity> = {
  low: 1,
  optimal: 2,
  high: 3,
};

const FILL_CLASSES: Record<Intensity, string> = {
  0: 'fill-neutral-200 dark:fill-neutral-800',
  1: 'fill-amber-400',
  2: 'fill-emerald-500',
  3: 'fill-rose-500',
};

type MuscleSummary = { intensity: Intensity; sources: string[] };

function buildMuscleMap(
  volume: Record<string, MuscleBreakdown>,
): Map<BodyMuscle, MuscleSummary> {
  const perMuscle = new Map<BodyMuscle, MuscleSummary>();

  for (const [key, breakdown] of Object.entries(volume)) {
    if (!breakdown.weighted) continue;
    const mapped = MUSCLE_MAP[key];
    if (!mapped) continue;
    const intensity = STATUS_INTENSITY[getStatus(breakdown.weighted)];
    const detail =
      breakdown.secondary > 0
        ? `${formatMuscleLabel(key)}: ${formatWeighted(breakdown.weighted)} sets (${breakdown.main} main + ${breakdown.secondary} assist)`
        : `${formatMuscleLabel(key)}: ${formatWeighted(breakdown.weighted)} sets`;
    for (const m of mapped) {
      const prev = perMuscle.get(m);
      if (!prev) {
        perMuscle.set(m, { intensity, sources: [detail] });
      } else {
        prev.sources.push(detail);
        if (prev.intensity < intensity) prev.intensity = intensity;
      }
    }
  }

  return perMuscle;
}

type BodySvgProps = {
  muscles: MusclePolygons[];
  muscleMap: Map<BodyMuscle, MuscleSummary>;
  viewBox: string;
  label: string;
};

function BodySvg({ muscles, muscleMap, viewBox, label }: BodySvgProps) {
  return (
    <figure className="flex flex-col items-center gap-1">
      <svg
        viewBox={viewBox}
        className="h-72 w-full"
        aria-label={`${label} body view`}
      >
        <g
          className="stroke-neutral-500/60 dark:stroke-neutral-400/40"
          strokeWidth="0.4"
          strokeLinejoin="round"
        >
          {muscles.map(({ muscle, points }) => {
            const summary = muscleMap.get(muscle);
            const intensity: Intensity = summary?.intensity ?? 0;
            const tooltip = summary
              ? summary.sources.join('\n')
              : formatMuscleLabel(muscle.replace(/-/g, '_'));
            return points.map((p, idx) => (
              <polygon
                key={`${muscle}-${idx}`}
                points={p}
                className={`${FILL_CLASSES[intensity]} transition-colors duration-300`}
              >
                <title>{tooltip}</title>
              </polygon>
            ));
          })}
        </g>
      </svg>
      <figcaption className="text-[10px] font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
        {label}
      </figcaption>
    </figure>
  );
}

export function BodyMap({ volume }: Props) {
  const muscleMap = useMemo(() => buildMuscleMap(volume), [volume]);

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <BodySvg
          muscles={anteriorMuscles}
          muscleMap={muscleMap}
          viewBox="0 0 100 200"
          label="Front"
        />
        <BodySvg
          muscles={posteriorMuscles}
          muscleMap={muscleMap}
          viewBox="0 0 100 220"
          label="Back"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] text-neutral-500 dark:text-neutral-400">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />{' '}
          None
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-amber-400" /> Low
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Optimal
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-rose-500" /> High
        </span>
      </div>
    </div>
  );
}
