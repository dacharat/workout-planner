'use client';

import { useMemo, useState } from 'react';
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
  type VolumeStatus,
} from '@/lib/volume';

type Props = { volume: Record<string, MuscleBreakdown> };

// dataset muscle key -> anatomical SVG regions
const MUSCLE_MAP: Record<string, BodyMuscle[]> = {
  chest: ['chest'],
  upper_chest: ['chest'],
  lower_chest: ['chest'],
  serratus_anterior: ['chest'],
  shoulders: ['front-deltoids', 'back-deltoids'],
  front_delts: ['front-deltoids'],
  side_delts: ['front-deltoids', 'back-deltoids'],
  rear_delts: ['back-deltoids'],
  rear_deltoids: ['back-deltoids'],
  biceps: ['biceps'],
  brachialis: ['biceps'],
  triceps: ['triceps'],
  forearms: ['forearm'],
  back: ['upper-back', 'lower-back'],
  lats: ['upper-back'],
  lat: ['upper-back'],
  upper_back: ['upper-back'],
  rhomboids: ['upper-back'],
  mid_traps: ['trapezius'],
  lower_back: ['lower-back'],
  traps: ['trapezius'],
  abs: ['abs'],
  lower_abs: ['abs'],
  core: ['abs'],
  obliques: ['obliques'],
  quads: ['quadriceps'],
  hamstrings: ['hamstring'],
  calves: ['calves', 'left-soleus', 'right-soleus'],
  tibialis_anterior: ['calves'],
  glutes: ['gluteal'],
  glute_medius: ['gluteal'],
  inner_thigh: ['adductor'],
  adductors: ['adductor'],
  abductors: ['abductors'],
};

type Summary = {
  status: VolumeStatus | 'none';
  sources: string[];
};

function buildMap(
  volume: Record<string, MuscleBreakdown>,
): Map<BodyMuscle, Summary> {
  const map = new Map<BodyMuscle, Summary>();
  const severity: Record<VolumeStatus | 'none', number> = {
    none: 0,
    low: 1,
    optimal: 2,
    high: 3,
  };
  for (const [key, b] of Object.entries(volume)) {
    if (!b.weighted) continue;
    const mapped = MUSCLE_MAP[key];
    if (!mapped) continue;
    const status = getStatus(b.weighted);
    const source = `${formatMuscleLabel(key)}: ${formatWeighted(b.weighted)} sets`;
    for (const m of mapped) {
      const prev = map.get(m);
      if (!prev) {
        map.set(m, { status, sources: [source] });
      } else {
        prev.sources.push(source);
        if (severity[status] > severity[prev.status]) prev.status = status;
      }
    }
  }
  return map;
}

const STATUS_FILL: Record<VolumeStatus | 'none', string> = {
  none: 'var(--panel-3)',
  low: 'var(--accent-soft)',
  optimal: 'var(--accent)',
  high: 'var(--danger)',
};

type SvgProps = {
  muscles: MusclePolygons[];
  map: Map<BodyMuscle, Summary>;
  viewBox: string;
  onHover: (muscle: BodyMuscle | null) => void;
};

function BodySvg({ muscles, map, viewBox, onHover }: SvgProps) {
  return (
    <svg
      viewBox={viewBox}
      className="h-[360px] w-full"
      aria-label="Anatomical muscle map"
    >
      <g strokeWidth={0.4} strokeLinejoin="round" stroke="var(--line-2)">
        {muscles.map(({ muscle, points }) => {
          const summary = map.get(muscle);
          const fill = STATUS_FILL[summary?.status ?? 'none'];
          const title = summary
            ? summary.sources.join('\n')
            : formatMuscleLabel(muscle.replace(/-/g, '_'));
          return points.map((p, i) => (
            <polygon
              key={`${muscle}-${i}`}
              points={p}
              fill={fill}
              onMouseEnter={() => onHover(muscle)}
              onMouseLeave={() => onHover(null)}
              style={{ transition: 'fill 200ms' }}
            >
              <title>{title}</title>
            </polygon>
          ));
        })}
      </g>
    </svg>
  );
}

export function AnatomyFigure({ volume }: Props) {
  const [side, setSide] = useState<'front' | 'back'>('front');
  const [hovered, setHovered] = useState<BodyMuscle | null>(null);

  const map = useMemo(() => buildMap(volume), [volume]);

  const hoveredDetail = hovered ? map.get(hovered) : null;

  return (
    <div className="figure-wrap grid grid-cols-[40px_1fr_200px] items-stretch gap-3">
      <div className="figure-side-btns flex flex-col gap-2">
        {(['front', 'back'] as const).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSide(s)}
            className={`flex flex-1 items-center justify-center rounded-lg border text-[10px] font-mono tracking-[0.14em] uppercase transition ${
              side === s
                ? 'border-accent bg-accent text-accent-ink'
                : 'border-line bg-panel-2 text-fg-muted'
            }`}
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="relative flex items-center justify-center rounded-xl bg-panel-2 px-4 py-3">
        {side === 'front' ? (
          <BodySvg
            muscles={anteriorMuscles}
            map={map}
            viewBox="0 0 100 200"
            onHover={setHovered}
          />
        ) : (
          <BodySvg
            muscles={posteriorMuscles}
            map={map}
            viewBox="0 0 100 220"
            onHover={setHovered}
          />
        )}
      </div>

      <div className="flex min-w-0 flex-col justify-start gap-2">
        {hoveredDetail ? (
          <div className="rounded-lg border border-line bg-panel-2 p-2.5">
            <div className="font-mono text-[9px] tracking-[0.14em] text-fg-dim">
              HOVER
            </div>
            <div className="mt-0.5 break-words text-[11px] font-semibold text-fg">
              {hovered ? formatMuscleLabel(hovered.replace(/-/g, '_')) : ''}
            </div>
            <div className="mt-1 break-words text-[10px] text-fg-muted">
              {hoveredDetail.sources.join(' · ')}
            </div>
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-line p-2.5 text-[10px] text-fg-dim">
            Hover a muscle for detail.
          </div>
        )}
      </div>
    </div>
  );
}
