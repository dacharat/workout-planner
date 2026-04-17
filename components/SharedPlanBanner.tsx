'use client';

import { useEffect, useState } from 'react';
import { usePlan, type PlanState } from '@/lib/plan-context';
import {
  clearSharedPlanFromUrl,
  readSharedPlanFromUrl,
} from '@/lib/share';
import { DAYS } from '@/lib/constants';

export function SharedPlanBanner() {
  const { hydrate } = usePlan();
  const [pending, setPending] = useState<PlanState | null>(null);

  useEffect(() => {
    const shared = readSharedPlanFromUrl();
    if (shared) setPending(shared);
  }, []);

  if (!pending) return null;

  const exerciseCount = DAYS.reduce(
    (sum, d) => sum + pending.days[d].length,
    0,
  );

  const handleApply = () => {
    hydrate(pending);
    clearSharedPlanFromUrl();
    setPending(null);
  };

  const handleDismiss = () => {
    clearSharedPlanFromUrl();
    setPending(null);
  };

  return (
    <div className="border-b border-amber-200 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-950/40">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="text-sm">
          <p className="font-medium text-amber-900 dark:text-amber-200">
            Shared workout plan detected
          </p>
          <p className="text-xs text-amber-800 dark:text-amber-300/80">
            {exerciseCount} exercise{exerciseCount === 1 ? '' : 's'} across the
            week. Applying will replace your current plan.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleDismiss}
            className="inline-flex h-8 items-center rounded-lg border border-amber-300 bg-white px-3 text-xs font-medium text-amber-900 hover:bg-amber-100 dark:border-amber-800 dark:bg-transparent dark:text-amber-200 dark:hover:bg-amber-900/40"
          >
            Dismiss
          </button>
          <button
            type="button"
            onClick={handleApply}
            className="inline-flex h-8 items-center rounded-lg bg-amber-600 px-3 text-xs font-medium text-white hover:bg-amber-700 dark:bg-amber-500 dark:text-amber-950 dark:hover:bg-amber-400"
          >
            Apply shared plan
          </button>
        </div>
      </div>
    </div>
  );
}
