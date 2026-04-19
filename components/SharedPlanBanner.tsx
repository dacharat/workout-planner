'use client';

import { useEffect, useState } from 'react';
import { usePlan, type PlanState } from '@/lib/plan-context';
import {
  clearSharedPlanFromUrl,
  readSharedPlanFromUrl,
} from '@/lib/share';
import { DAYS } from '@/lib/constants';
import { trackEvent } from '@/lib/analytics';

export function SharedPlanBanner() {
  const { hydrate } = usePlan();
  const [pending, setPending] = useState<PlanState | null>(null);

  useEffect(() => {
    const shared = readSharedPlanFromUrl();
    if (shared) {
      setPending(shared);
      const exerciseCount = DAYS.reduce(
        (sum, d) => sum + shared.days[d].length,
        0,
      );
      trackEvent('shared_link_visit', { exerciseCount });
    }
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
    <div
      className="border-b border-line"
      style={{ background: 'var(--accent-soft)' }}
    >
      <div className="flex flex-col items-start justify-between gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="text-sm">
          <p className="font-medium text-fg">Shared workout plan detected</p>
          <p className="text-xs text-fg-muted">
            {exerciseCount} exercise{exerciseCount === 1 ? '' : 's'} across the
            week. Applying will replace your current plan.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleDismiss}
            className="inline-flex h-8 items-center rounded-lg border border-line bg-panel-2 px-3 text-xs font-medium text-fg hover:bg-panel-3"
          >
            Dismiss
          </button>
          <button
            type="button"
            onClick={handleApply}
            className="inline-flex h-8 items-center rounded-lg bg-accent px-3 text-xs font-medium text-accent-ink"
          >
            Apply shared plan
          </button>
        </div>
      </div>
    </div>
  );
}
