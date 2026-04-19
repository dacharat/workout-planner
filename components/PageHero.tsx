export function PageHero() {
  return (
    <div className="page-header flex flex-wrap items-end justify-between gap-5 py-9">
      <div>
        <div className="mb-2 font-mono text-[11px] tracking-[0.14em] text-fg-dim">
          THE WEEK AHEAD
        </div>
        <h1 className="font-display m-0 text-[clamp(36px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.04em] text-fg">
          Plan. Lift. <span style={{ color: 'var(--accent)' }}>Progress.</span>
        </h1>
      </div>
      <div className="flex items-center gap-4 pb-2.5">
        <div className="flex items-center gap-1.5">
          <div
            className="h-2 w-2 rounded-full"
            style={{ background: 'var(--accent)' }}
          />
          <span className="font-mono text-[11px] tracking-[0.08em] text-fg-muted">
            SYNCED · LOCAL
          </span>
        </div>
      </div>
    </div>
  );
}
