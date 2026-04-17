'use client';

import { useEffect, useRef, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { usePlan } from '@/lib/plan-context';
import { downloadPlanCsv } from '@/lib/csv';
import { buildShareUrl } from '@/lib/share';

export function Header() {
  const { plan, restDays, state, clearAll } = usePlan();
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied' | 'error'>(
    'idle',
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKey);
    };
  }, [menuOpen]);

  const handleExport = () => {
    downloadPlanCsv(plan, restDays);
    setMenuOpen(false);
  };

  const handleReset = () => {
    setMenuOpen(false);
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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <h1 className="truncate text-base font-semibold tracking-tight sm:text-xl">
            Weekly Workout Planner
          </h1>
          <p className="hidden text-xs text-neutral-500 dark:text-neutral-400 sm:block">
            Plan your week. Track muscle volume. Stay consistent.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex h-9 items-center rounded-lg border border-neutral-200 bg-white px-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            {shareLabel}
          </button>

          {/* Desktop: inline secondary buttons */}
          <button
            type="button"
            onClick={handleExport}
            className="hidden h-9 items-center rounded-lg bg-neutral-900 px-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 sm:inline-flex"
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

          {/* Mobile: kebab overflow menu with Export + Reset */}
          <div className="relative sm:hidden" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="More actions"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden
              >
                <circle cx="12" cy="5" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="12" cy="19" r="1.5" />
              </svg>
            </button>
            {menuOpen && (
              <div
                role="menu"
                className="absolute right-0 top-full z-20 mt-1 w-44 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
              >
                <button
                  type="button"
                  role="menuitem"
                  onClick={handleExport}
                  className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0"
                    aria-hidden
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Export CSV
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={handleReset}
                  className="flex w-full items-center gap-2 border-t border-neutral-200 px-3 py-2 text-left text-sm text-rose-600 hover:bg-rose-50 dark:border-neutral-800 dark:text-rose-400 dark:hover:bg-rose-950/40"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0"
                    aria-hidden
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    <path d="M10 11v6M14 11v6" />
                    <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                  </svg>
                  Reset plan
                </button>
              </div>
            )}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
