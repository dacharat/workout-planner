import type { ExerciseEntry, PlanState, RestDays, WeeklyPlan } from './plan-context';
import { DAYS, type DayKey } from './constants';
import { exerciseById } from '@/data/exercises';

export type Template = {
  id: string;
  name: string;
  schedule: string;
  level: string;
  desc: string;
  plan: PlanState | null;
};

const entry = (id: string, sets: number, reps: number): ExerciseEntry | null =>
  exerciseById[id] ? { id, sets, reps } : null;

const day = (...xs: (ExerciseEntry | null)[]): ExerciseEntry[] =>
  xs.filter((x): x is ExerciseEntry => x !== null);

function buildPlan(
  days: Partial<Record<DayKey, ExerciseEntry[]>>,
  rest: DayKey[],
): PlanState {
  const plan = {} as WeeklyPlan;
  const restDays = {} as RestDays;
  for (const d of DAYS) {
    plan[d] = days[d] ?? [];
    restDays[d] = rest.includes(d);
  }
  return { days: plan, restDays };
}

const PPL_6_DAY: PlanState = buildPlan(
  {
    Mon: day(
      entry('bench_press_bb', 4, 6),
      entry('incline_db_press', 3, 10),
      entry('shoulder_press_db', 3, 10),
      entry('lateral_raise_db', 4, 13),
      entry('tricep_pushdown_rope', 3, 12),
    ),
    Tue: day(
      entry('deadlift_conv', 3, 4),
      entry('weighted_pull_up', 4, 8),
      entry('seated_cable_row', 3, 10),
      entry('face_pull_rope', 3, 13),
      entry('bicep_curl_bb', 3, 10),
    ),
    Wed: day(
      entry('back_squat_bb', 4, 6),
      entry('rdl_bb', 3, 10),
      entry('leg_press_std', 3, 12),
      entry('lying_leg_curl_machine', 3, 12),
      entry('standing_calf_raise_machine', 4, 12),
    ),
    Thu: day(
      entry('ohp_bb', 4, 6),
      entry('bench_press_db', 3, 10),
      entry('lateral_raise_db', 4, 13),
      entry('cable_fly_mid', 3, 13),
      entry('skull_crushers_ez', 3, 10),
    ),
    Fri: day(
      entry('bb_row_bent_over', 4, 8),
      entry('lat_pulldown_wide', 3, 10),
      entry('face_pull_rope', 3, 13),
      entry('hammer_curl_db', 3, 10),
      entry('shrug_db', 3, 12),
    ),
    Sat: day(
      entry('front_squat_bb', 4, 6),
      entry('hip_thrust_bb', 3, 10),
      entry('lunge_walking_db', 3, 10),
      entry('leg_extension_machine', 3, 13),
      entry('hanging_leg_raise', 3, 12),
    ),
  },
  ['Sun'],
);

export const TEMPLATES: Template[] = [
  {
    id: 'ppl6',
    name: 'Push / Pull / Legs',
    schedule: '6-day',
    level: 'Intermediate',
    desc: 'Classic 6-day hypertrophy split. Push and pull alternate with legs.',
    plan: PPL_6_DAY,
  },
  {
    id: 'ul4',
    name: 'Upper / Lower',
    schedule: '4-day',
    level: 'Beginner–Int.',
    desc: 'Balanced 4-day frequency. Upper and lower twice each.',
    plan: null,
  },
  {
    id: 'fb3',
    name: 'Full Body',
    schedule: '3-day',
    level: 'Beginner',
    desc: 'Compound-focused full body. Great for starting out.',
    plan: null,
  },
  {
    id: 'arnold',
    name: 'Arnold Split',
    schedule: '6-day',
    level: 'Advanced',
    desc: 'Chest/back, shoulders/arms, legs — twice weekly.',
    plan: null,
  },
  {
    id: 'bro',
    name: 'Body Part Split',
    schedule: '5-day',
    level: 'Intermediate',
    desc: 'One muscle group per day. High volume, low frequency.',
    plan: null,
  },
];
