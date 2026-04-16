'use client';

import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { usePlan } from '@/lib/plan-context';
import { downloadPlanCsv } from '@/lib/csv';
import { buildShareUrl } from '@/lib/share';

export function Header() {
  const { plan, restDays, state, clearAll } = usePlan();
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied' | 'error'>(
    'idle',
  );

  const handleExport = () => {
    downloadPlanCsv(plan, restDays);
  };

  const handleReset = () => {
    if (confirm('Clear the entire weekly plan?')) clearAll();
  };

  const handleShare = async () => {
    try {
      const url = buildShareUrl(state);
      await navigator.clipboard.writeText(url);
      setShareStatus('copied');
    } catch {
      setShareStatus('error');
    } finally {
      setTimeout(() => setShareStatus('idle'), 2000);
    }
  };

  const shareLabel =
    shareStatus === 'copied'
      ? 'Copied!'
      : shareStatus === 'error'
        ? 'Copy failed'
        : 'Share';

  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-lg font-semibold tracking-tight sm:text-xl">
            Weekly Workout Planner
          </h1>
          <p className="hidden text-xs text-neutral-500 dark:text-neutral-400 sm:block">
            Plan your week. Track muscle volume. Stay consistent.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex h-9 items-center rounded-lg border border-neutral-200 bg-white px-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            {shareLabel}
          </button>
          <button
            type="button"
            onClick={handleExport}
            className="inline-flex h-9 items-center rounded-lg bg-neutral-900 px-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Export CSV
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="hidden h-9 items-center rounded-lg border border-neutral-200 bg-white px-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800 sm:inline-flex"
          >
            Reset
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
