export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;
export type DayKey = (typeof DAYS)[number];

export const DAY_LABELS: Record<DayKey, string> = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
  Sun: 'Sunday',
};

export const STORAGE_KEYS = {
  plan: 'workout-planner:plan',
  theme: 'workout-planner:theme',
} as const;

export const MOVEMENTS = ['push', 'pull', 'legs', 'core'] as const;
