import type { Metadata } from 'next';
import { PlanProvider } from '@/lib/plan-context';
import './globals.css';

export const metadata: Metadata = {
  title: 'Weekly Workout Planner',
  description: 'Plan your weekly workouts and track muscle volume.',
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('workout-planner:theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="2ca29c2b-fa94-44ee-9eb2-07db7a620279"
        />
      </head>
      <body>
        <PlanProvider>{children}</PlanProvider>
      </body>
    </html>
  );
}
