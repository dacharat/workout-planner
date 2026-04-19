'use client';

import {
  ACCENT_OPTIONS,
  TYPE_OPTIONS,
  useTweaks,
  type ThemeMode,
} from '@/lib/tweaks-context';

type Props = { open: boolean; onClose: () => void };

export function TweaksPanel({ open, onClose }: Props) {
  const { tweaks, setTweaks } = useTweaks();
  if (!open) return null;

  return (
    <div
      className="fixed bottom-5 right-5 z-40 w-[300px] rounded-2xl border border-line bg-panel p-5 shadow-[0_24px_60px_rgba(0,0,0,0.5)] max-[640px]:bottom-[70px] max-[640px]:left-3 max-[640px]:right-3 max-[640px]:w-auto"
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-label="Design tweaks"
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <div className="font-mono text-[9px] tracking-[0.14em] text-fg-dim">
            TWEAKS
          </div>
          <div className="font-display text-xl font-semibold tracking-tight text-fg">
            Design knobs
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close tweaks"
          className="flex h-7 w-7 items-center justify-center rounded-md bg-panel-2 text-xs text-fg-muted hover:text-fg"
        >
          ✕
        </button>
      </div>

      <section className="mb-4">
        <div className="mb-2 font-mono text-[10px] tracking-[0.12em] text-fg-dim">
          THEME
        </div>
        <div className="grid grid-cols-2 gap-2">
          {(['dark', 'light'] as ThemeMode[]).map((t) => {
            const active = tweaks.theme === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTweaks({ theme: t })}
                className={`rounded-xl border p-2 text-center transition ${
                  active
                    ? 'border-accent bg-accent-soft'
                    : 'border-line bg-panel-2'
                }`}
              >
                <div
                  className="flex h-[42px] w-full items-center justify-center rounded-md border border-line"
                  style={{ background: t === 'dark' ? '#0A0B0D' : '#F5F5F2' }}
                >
                  <div
                    className="h-4 w-4 rounded"
                    style={{ background: tweaks.accent }}
                  />
                </div>
                <div className="mt-1.5 text-xs font-medium capitalize text-fg">
                  {t}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mb-4">
        <div className="mb-2 font-mono text-[10px] tracking-[0.12em] text-fg-dim">
          ACCENT
        </div>
        <div className="grid grid-cols-6 gap-1.5">
          {ACCENT_OPTIONS.map((a) => {
            const active = tweaks.accent === a.value;
            return (
              <button
                key={a.value}
                type="button"
                onClick={() => setTweaks({ accent: a.value })}
                title={a.label}
                aria-label={a.label}
                className="aspect-square rounded-md"
                style={{
                  background: a.value,
                  outline: active ? '2px solid var(--fg)' : 'none',
                  outlineOffset: 2,
                }}
              />
            );
          })}
        </div>
      </section>

      <section>
        <div className="mb-2 font-mono text-[10px] tracking-[0.12em] text-fg-dim">
          TYPE
        </div>
        <div className="flex flex-col gap-1.5">
          {TYPE_OPTIONS.map((t) => {
            const active = tweaks.type === t.value;
            return (
              <button
                key={t.value}
                type="button"
                onClick={() => setTweaks({ type: t.value })}
                className={`rounded-lg border px-3 py-2.5 text-left transition ${
                  active
                    ? 'border-accent bg-accent-soft'
                    : 'border-line bg-panel-2'
                }`}
              >
                <div className="text-[13px] font-semibold text-fg">
                  {t.label}
                </div>
                <div className="mt-0.5 font-mono text-[10px] tracking-wider text-fg-dim">
                  {t.sub}
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
