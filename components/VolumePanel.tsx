'use client';

import { useMemo, useState } from 'react';
import { usePlan } from '@/lib/plan-context';
import { computeMuscleVolume } from '@/lib/volume';
import { DAYS, type DayKey } from '@/lib/constants';
import { AnatomyFigure } from './AnatomyFigure';
import { MuscleChartView } from './MuscleChartView';

type View = 'figure' | 'chart';

export function VolumePanel() {
  const { plan, restDays } = usePlan();
  const [view, setView] = useState<View>('figure');
  const [filterDay, setFilterDay] = useState<DayKey | 'all'>('all');

  const volume = useMemo(
    () =>
      computeMuscleVolume(
        plan,
        restDays,
        filterDay === 'all' ? undefined : [filterDay],
      ),
    [plan, restDays, filterDay],
  );

  return (
    <section className="rounded-2xl border border-line bg-panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="font-mono text-[10px] tracking-[0.14em] text-fg-dim">
            WEEKLY VOLUME
          </div>
          <div className="font-display text-[22px] font-semibold tracking-tight text-fg">
            Muscle load
          </div>
        </div>
        <div className="flex rounded-lg border border-line bg-panel-2 p-0.5">
          {(['figure', 'chart'] as View[]).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setView(v)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium capitalize transition ${
                view === v ? 'bg-accent text-accent-ink' : 'text-fg-muted hover:text-fg'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => setFilterDay('all')}
          className={`inline-flex h-7 items-center rounded-full border px-3 text-[11px] font-medium transition ${
            filterDay === 'all'
              ? 'border-accent bg-accent text-accent-ink'
              : 'border-line bg-panel-2 text-fg-muted hover:text-fg'
          }`}
        >
          All week
        </button>
        {DAYS.map((d) => {
          const active = filterDay === d;
          const isRest = restDays[d];
          return (
            <button
              key={d}
              type="button"
              onClick={() => setFilterDay(d)}
              className={`inline-flex h-7 items-center rounded-full border px-3 text-[11px] font-medium transition ${
                active
                  ? 'border-accent bg-accent text-accent-ink'
                  : 'border-line bg-panel-2 text-fg-muted hover:text-fg'
              } ${isRest ? 'opacity-50' : ''}`}
              title={isRest ? 'Rest day' : undefined}
            >
              {d}
            </button>
          );
        })}
      </div>

      <div className="mt-5">
        {view === 'figure' ? (
          <AnatomyFigure volume={volume} />
        ) : (
          <MuscleChartView volume={volume} />
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-line pt-3">
        <Legend color="var(--panel-3)" label="None" />
        <Legend color="var(--accent-soft)" label="Low" />
        <Legend color="var(--accent)" label="Optimal" />
        <Legend color="var(--danger)" label="High" />
      </div>
    </section>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div
        className="h-2.5 w-2.5 rounded"
        style={{ background: color, border: '1px solid var(--line-2)' }}
      />
      <span className="font-mono text-[10px] tracking-[0.08em] text-fg-muted">
        {label.toUpperCase()}
      </span>
    </div>
  );
}
