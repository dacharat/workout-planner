'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePlan } from '@/lib/plan-context';
import { downloadPlanCsv } from '@/lib/csv';
import { trackEvent } from '@/lib/analytics';
import { buildShareUrl } from '@/lib/share';
import { DAYS } from '@/lib/constants';
import { isoWeekNumber, weekRangeLabel } from '@/lib/week';

type Props = {
  onOpenTemplates: () => void;
  onToggleTweaks: () => void;
  tweaksOpen: boolean;
};

export function Header({ onOpenTemplates, onToggleTweaks, tweaksOpen }: Props) {
  const { plan, restDays, state, clearAll } = usePlan();
  const [shareCopied, setShareCopied] = useState(false);
  const [weekLabel, setWeekLabel] = useState('WEEK — · ———');

  useEffect(() => {
    const now = new Date();
    setWeekLabel(`WEEK ${isoWeekNumber(now)} · ${weekRangeLabel(now)}`);
  }, []);

  const { trainingDays, totalExercises, totalSets } = useMemo(() => {
    let days = 0;
    let ex = 0;
    let sets = 0;
    for (const d of DAYS) {
      if (restDays[d]) continue;
      const entries = plan[d];
      if (entries.length === 0) continue;
      days += 1;
      ex += entries.length;
      sets += entries.reduce((s, e) => s + e.sets, 0);
    }
    return { trainingDays: days, totalExercises: ex, totalSets: sets };
  }, [plan, restDays]);

  const handleExport = () => {
    downloadPlanCsv(plan, restDays);
    trackEvent('export_csv');
  };

  const handleReset = () => {
    if (confirm('Clear the entire weekly plan?')) clearAll();
  };

  const handleShare = async () => {
    try {
      const url = buildShareUrl(state);
      await navigator.clipboard.writeText(url);
      setShareCopied(true);
      trackEvent('share_click');
    } catch {
      trackEvent('share_click_error');
    } finally {
      setTimeout(() => setShareCopied(false), 2000);
    }
  };

  return (
    <header className="topbar flex flex-wrap items-center justify-between gap-5 border-b border-line py-3.5">
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M6 4v16M18 4v16M3 8h3M3 16h3M18 8h3M18 16h3M6 12h12" />
          </svg>
        </div>
        <div>
          <div className="font-display text-[20px] font-bold leading-none tracking-[-0.04em] text-fg">
            LOAD
          </div>
          <div className="mt-[3px] font-mono text-[10px] tracking-[0.12em] text-fg-dim">
            {weekLabel}
          </div>
        </div>
      </div>

      <div className="topbar-stats flex gap-6">
        <Stat label="DAYS" value={`${trainingDays}/7`} />
        <Stat label="EXERCISES" value={totalExercises} />
        <Stat label="SETS" value={totalSets} />
      </div>

      <div className="topbar-actions flex items-center gap-2">
        <button
          type="button"
          onClick={onOpenTemplates}
          className="hide-mobile inline-flex items-center gap-1.5 rounded-lg border border-line bg-panel-2 px-3 py-2 text-xs font-medium text-fg"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          Templates
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="hide-mobile rounded-lg px-3 py-2 text-xs font-medium text-fg-muted hover:text-fg"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={handleExport}
          className="hide-mobile rounded-lg px-3 py-2 text-xs font-medium text-fg-muted hover:text-fg"
        >
          Export
        </button>

        <button
          type="button"
          onClick={handleShare}
          title={shareCopied ? 'Link copied' : 'Share link'}
          aria-label="Share link"
          className={`flex h-[34px] w-[34px] items-center justify-center rounded-lg border transition ${
            shareCopied
              ? 'border-accent bg-accent text-accent-ink'
              : 'border-line bg-panel-2 text-fg-muted'
          }`}
        >
          {shareCopied ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          )}
        </button>

        <button
          type="button"
          onClick={onToggleTweaks}
          title="Tweaks"
          aria-label="Toggle tweaks"
          className={`flex h-[34px] w-[34px] items-center justify-center rounded-lg border transition ${
            tweaksOpen
              ? 'border-accent bg-accent text-accent-ink'
              : 'border-line bg-panel-2 text-fg-muted'
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="text-left">
      <div className="font-display text-[22px] font-bold leading-none tracking-[-0.04em] text-fg">
        {value}
      </div>
      <div className="mt-[3px] font-mono text-[9px] tracking-[0.14em] text-fg-dim">
        {label}
      </div>
    </div>
  );
}
