'use client';

import { Header } from '@/components/Header';
import { DayCard } from '@/components/DayCard';
import { MuscleVolumeSummary } from '@/components/MuscleVolumeSummary';
import { DAYS } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <section aria-label="Weekly plan">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {DAYS.map((day) => (
                <DayCard key={day} day={day} />
              ))}
            </div>
          </section>
          <aside className="lg:sticky lg:top-20 lg:self-start">
            <MuscleVolumeSummary />
          </aside>
        </div>
      </main>
    </div>
  );
}
