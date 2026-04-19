import type { Metadata } from 'next';
import { PlanProvider } from '@/lib/plan-context';
import { TweaksProvider } from '@/lib/tweaks-context';
import './globals.css';

export const metadata: Metadata = {
  title: 'LOAD — Workout Planner',
  description: 'Plan your week. Track muscle volume. Progress.',
};

const tweaksInitScript = `
(function() {
  try {
    var raw = localStorage.getItem('workout-planner:tweaks');
    var tweaks = raw ? JSON.parse(raw) : null;
    if (!tweaks) {
      var legacyTheme = localStorage.getItem('workout-planner:theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      tweaks = { theme: legacyTheme || (prefersDark ? 'dark' : 'light'), accent: '#C6F432', type: 'modern' };
    }
    var el = document.documentElement;
    el.dataset.theme = tweaks.theme || 'dark';
    el.dataset.type = tweaks.type || 'modern';
    el.style.setProperty('--accent', tweaks.accent || '#C6F432');
    var hex = (tweaks.accent || '#C6F432').replace('#','');
    var r = parseInt(hex.substring(0,2),16), g = parseInt(hex.substring(2,4),16), b = parseInt(hex.substring(4,6),16);
    var br = (r*299 + g*587 + b*114) / 1000;
    el.style.setProperty('--accent-ink', br > 140 ? '#0A0B0D' : '#FFFFFF');
    el.style.setProperty('--accent-soft', (tweaks.accent || '#C6F432') + '1F');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Instrument+Serif&family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: tweaksInitScript }} />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="2ca29c2b-fa94-44ee-9eb2-07db7a620279"
        />
      </head>
      <body>
        <TweaksProvider>
          <PlanProvider>{children}</PlanProvider>
        </TweaksProvider>
      </body>
    </html>
  );
}
