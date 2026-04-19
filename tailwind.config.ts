import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        'panel-2': 'var(--panel-2)',
        'panel-3': 'var(--panel-3)',
        line: 'var(--line)',
        'line-2': 'var(--line-2)',
        fg: 'var(--fg)',
        'fg-muted': 'var(--fg-muted)',
        'fg-dim': 'var(--fg-dim)',
        accent: 'var(--accent)',
        'accent-ink': 'var(--accent-ink)',
        'accent-soft': 'var(--accent-soft)',
        danger: 'var(--danger)',
        warn: 'var(--warn)',
        ok: 'var(--ok)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        mono: 'var(--font-mono)',
      },
      maxWidth: {
        shell: '1600px',
      },
    },
  },
  plugins: [],
};

export default config;
