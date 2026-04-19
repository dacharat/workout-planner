'use client';

import {
  MUSCLE_GROUPS,
  VOLUME_TARGET,
  computeGroupVolume,
  formatWeighted,
  getStatus,
  type MuscleBreakdown,
} from '@/lib/volume';

type Props = { volume: Record<string, MuscleBreakdown> };

const STATUS_FILL = {
  low: 'var(--accent-soft)',
  optimal: 'var(--accent)',
  high: 'var(--danger)',
} as const;

const MAX = 30; // chart max (sets/week)

export function MuscleChartView({ volume }: Props) {
  return (
    <ul className="space-y-3">
      {MUSCLE_GROUPS.map((group) => {
        const sets = computeGroupVolume(volume, group.muscles);
        const status = sets > 0 ? getStatus(sets) : null;
        const pct = Math.min(100, (sets / MAX) * 100);
        const targetLow = (VOLUME_TARGET[0] / MAX) * 100;
        const targetHigh = (VOLUME_TARGET[1] / MAX) * 100;
        return (
          <li
            key={group.label}
            className="chart-row grid grid-cols-[110px_1fr_44px] items-center gap-3"
          >
            <div className="font-mono text-[11px] tracking-[0.08em] text-fg-muted">
              {group.label.toUpperCase()}
            </div>
            <div className="relative h-4 overflow-hidden rounded-md bg-panel-3">
              <div
                className="absolute inset-y-0 border-x border-dashed border-fg-dim/40"
                style={{
                  left: `${targetLow}%`,
                  width: `${targetHigh - targetLow}%`,
                }}
              />
              <div
                className="absolute inset-y-0 left-0"
                style={{
                  width: `${pct}%`,
                  background: status ? STATUS_FILL[status] : 'var(--panel-3)',
                  transition: 'width 200ms',
                }}
              />
            </div>
            <div className="text-right font-mono text-[11px] tabular-nums text-fg">
              {sets > 0 ? formatWeighted(sets) : '—'}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
