'use client';

import { useEffect } from 'react';
import { usePlan } from '@/lib/plan-context';
import { TEMPLATES, type Template } from '@/lib/templates';

type Props = { open: boolean; onClose: () => void };

export function TemplatesDrawer({ open, onClose }: Props) {
  const { hydrate } = usePlan();

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  const apply = (t: Template) => {
    if (!t.plan) return;
    if (confirm(`Apply "${t.name}"? This will replace your current week.`)) {
      hydrate(t.plan);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-end bg-black/60 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-label="Templates"
    >
      <div
        className="tmpl-drawer flex w-full max-w-[520px] flex-col overflow-hidden border-l border-line bg-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between px-7 pb-5 pt-7">
          <div>
            <div className="font-mono text-[10px] tracking-[0.14em] text-fg-dim">
              TEMPLATES
            </div>
            <div className="font-display text-[28px] font-semibold tracking-tight text-fg">
              Start from a proven split
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close templates"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-panel-2 text-fg-muted hover:text-fg"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-7 pb-7 pt-2">
          {TEMPLATES.map((t) => (
            <div
              key={t.id}
              className="rounded-[14px] border border-line bg-panel-2 p-5"
            >
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <div className="font-display text-xl font-semibold tracking-tight text-fg">
                    {t.name}
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    <span
                      className="rounded px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em]"
                      style={{
                        background: 'var(--accent-soft)',
                        color: 'var(--accent)',
                      }}
                    >
                      {t.schedule}
                    </span>
                    <span className="rounded bg-panel-3 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-fg-muted">
                      {t.level}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-3.5 text-[13px] leading-relaxed text-fg-muted">
                {t.desc}
              </div>
              <button
                type="button"
                onClick={() => apply(t)}
                disabled={!t.plan}
                className={`rounded-lg px-4 py-2.5 text-[13px] font-semibold transition ${
                  t.plan
                    ? 'bg-accent text-accent-ink'
                    : 'cursor-not-allowed bg-panel-3 text-fg-dim'
                }`}
              >
                {t.plan ? 'Apply template' : 'Coming soon'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
