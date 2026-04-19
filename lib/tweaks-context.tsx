'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

export type ThemeMode = 'dark' | 'light';
export type FontType = 'default' | 'editorial' | 'modern';

export type Tweaks = {
  theme: ThemeMode;
  accent: string;
  type: FontType;
};

const STORAGE_KEY = 'workout-planner:tweaks';

const DEFAULT_TWEAKS: Tweaks = {
  theme: 'dark',
  accent: '#C6F432',
  type: 'modern',
};

export const ACCENT_OPTIONS = [
  { label: 'Electric lime', value: '#C6F432' },
  { label: 'Sunset orange', value: '#FF8547' },
  { label: 'Volt blue', value: '#4D9FFF' },
  { label: 'Hot magenta', value: '#FF3D9A' },
  { label: 'Arctic cyan', value: '#49E5D3' },
  { label: 'Soft violet', value: '#A888FF' },
];

export const TYPE_OPTIONS: { label: string; value: FontType; sub: string }[] = [
  { label: 'Default', value: 'default', sub: 'Space Grotesk · Inter' },
  { label: 'Editorial', value: 'editorial', sub: 'Instrument Serif · Inter' },
  { label: 'Modern', value: 'modern', sub: 'Manrope · IBM Plex Mono' },
];

type Ctx = {
  tweaks: Tweaks;
  setTweaks: (patch: Partial<Tweaks>) => void;
};

const TweaksContext = createContext<Ctx | null>(null);

function applyTweaks(t: Tweaks) {
  const el = document.documentElement;
  el.dataset.theme = t.theme;
  el.dataset.type = t.type;
  el.style.setProperty('--accent', t.accent);
  const hex = t.accent.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  el.style.setProperty('--accent-ink', brightness > 140 ? '#0A0B0D' : '#FFFFFF');
  el.style.setProperty('--accent-soft', `${t.accent}1F`);
}

export function TweaksProvider({ children }: { children: ReactNode }) {
  const [tweaks, setTweaksState] = useState<Tweaks>(DEFAULT_TWEAKS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Tweaks>;
        setTweaksState({ ...DEFAULT_TWEAKS, ...parsed });
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    applyTweaks(tweaks);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tweaks));
    } catch {
      // ignore
    }
  }, [tweaks]);

  const setTweaks = useCallback((patch: Partial<Tweaks>) => {
    setTweaksState((prev) => ({ ...prev, ...patch }));
  }, []);

  return (
    <TweaksContext.Provider value={{ tweaks, setTweaks }}>
      {children}
    </TweaksContext.Provider>
  );
}

export function useTweaks(): Ctx {
  const ctx = useContext(TweaksContext);
  if (!ctx) throw new Error('useTweaks must be used within TweaksProvider');
  return ctx;
}
