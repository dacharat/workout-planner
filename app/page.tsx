'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { PageHero } from '@/components/PageHero';
import { DayCard } from '@/components/DayCard';
import { VolumePanel } from '@/components/VolumePanel';
import { TemplatesDrawer } from '@/components/TemplatesDrawer';
import { TweaksPanel } from '@/components/TweaksPanel';
import { SharedPlanBanner } from '@/components/SharedPlanBanner';
import { DAYS } from '@/lib/constants';

export default function HomePage() {
  const [templatesOpen, setTemplatesOpen] = useState(false);
  const [tweaksOpen, setTweaksOpen] = useState(false);

  return (
    <div className="mx-auto min-h-screen max-w-shell px-5 pb-10 pt-5 md:px-8">
      <Header
        onOpenTemplates={() => setTemplatesOpen(true)}
        onToggleTweaks={() => setTweaksOpen((v) => !v)}
        tweaksOpen={tweaksOpen}
      />
      <SharedPlanBanner />
      <PageHero />
      <section className="mb-6">
        <div className="week-grid">
          {DAYS.map((day) => (
            <DayCard key={day} day={day} />
          ))}
        </div>
      </section>
      <section className="mb-6">
        <VolumePanel />
      </section>
      <footer className="mt-5 flex flex-wrap justify-between gap-3 border-t border-line py-5">
        <div className="font-mono text-[10px] tracking-[0.12em] text-fg-dim">
          LOAD · WORKOUT PLANNER
        </div>
        <div className="font-mono text-[10px] tracking-[0.12em] text-fg-dim">
          v2.0 · LOCAL-ONLY
        </div>
      </footer>

      <TemplatesDrawer
        open={templatesOpen}
        onClose={() => setTemplatesOpen(false)}
      />
      <TweaksPanel open={tweaksOpen} onClose={() => setTweaksOpen(false)} />
    </div>
  );
}
