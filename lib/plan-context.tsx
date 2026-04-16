'use client';

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from 'react';
import { DAYS, STORAGE_KEYS, type DayKey } from './constants';

export type ExerciseEntry = {
  id: string;
  sets: number;
  reps: number;
};

export type WeeklyPlan = Record<DayKey, ExerciseEntry[]>;
export type RestDays = Record<DayKey, boolean>;

export type PlanState = {
  days: WeeklyPlan;
  restDays: RestDays;
};

const emptyPlan = (): WeeklyPlan =>
  DAYS.reduce((acc, day) => {
    acc[day] = [];
    return acc;
  }, {} as WeeklyPlan);

const emptyRest = (): RestDays =>
  DAYS.reduce((acc, day) => {
    acc[day] = false;
    return acc;
  }, {} as RestDays);

const emptyState = (): PlanState => ({
  days: emptyPlan(),
  restDays: emptyRest(),
});

type Action =
  | { type: 'HYDRATE'; state: PlanState }
  | { type: 'ADD_EXERCISE'; day: DayKey; entry: ExerciseEntry }
  | { type: 'ADD_EXERCISES'; day: DayKey; entries: ExerciseEntry[] }
  | { type: 'REMOVE_EXERCISE'; day: DayKey; index: number }
  | { type: 'UPDATE_ENTRY'; day: DayKey; index: number; patch: Partial<ExerciseEntry> }
  | { type: 'CLEAR_DAY'; day: DayKey }
  | { type: 'CLEAR_ALL' }
  | { type: 'TOGGLE_REST'; day: DayKey };

const reducer = (state: PlanState, action: Action): PlanState => {
  switch (action.type) {
    case 'HYDRATE':
      return action.state;
    case 'ADD_EXERCISE':
      return {
        ...state,
        days: {
          ...state.days,
          [action.day]: [...state.days[action.day], action.entry],
        },
        restDays: { ...state.restDays, [action.day]: false },
      };
    case 'ADD_EXERCISES':
      if (action.entries.length === 0) return state;
      return {
        ...state,
        days: {
          ...state.days,
          [action.day]: [...state.days[action.day], ...action.entries],
        },
        restDays: { ...state.restDays, [action.day]: false },
      };
    case 'REMOVE_EXERCISE':
      return {
        ...state,
        days: {
          ...state.days,
          [action.day]: state.days[action.day].filter((_, i) => i !== action.index),
        },
      };
    case 'UPDATE_ENTRY':
      return {
        ...state,
        days: {
          ...state.days,
          [action.day]: state.days[action.day].map((e, i) =>
            i === action.index ? { ...e, ...action.patch } : e,
          ),
        },
      };
    case 'CLEAR_DAY':
      return {
        ...state,
        days: { ...state.days, [action.day]: [] },
      };
    case 'CLEAR_ALL':
      return emptyState();
    case 'TOGGLE_REST':
      return {
        ...state,
        restDays: {
          ...state.restDays,
          [action.day]: !state.restDays[action.day],
        },
      };
    default:
      return state;
  }
};

type PlanContextValue = {
  plan: WeeklyPlan;
  restDays: RestDays;
  state: PlanState;
  addExercise: (day: DayKey, entry: ExerciseEntry) => void;
  addExercises: (day: DayKey, entries: ExerciseEntry[]) => void;
  removeExercise: (day: DayKey, index: number) => void;
  updateEntry: (day: DayKey, index: number, patch: Partial<ExerciseEntry>) => void;
  clearDay: (day: DayKey) => void;
  clearAll: () => void;
  toggleRest: (day: DayKey) => void;
  hydrate: (state: PlanState) => void;
};

const PlanContext = createContext<PlanContextValue | null>(null);

const isValidState = (value: unknown): value is PlanState => {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  if (!v.days || typeof v.days !== 'object') return false;
  if (!v.restDays || typeof v.restDays !== 'object') return false;
  const days = v.days as Record<string, unknown>;
  const rest = v.restDays as Record<string, unknown>;
  return DAYS.every((d) => Array.isArray(days[d]) && typeof rest[d] === 'boolean');
};

const isLegacyPlan = (value: unknown): value is WeeklyPlan => {
  if (!value || typeof value !== 'object') return false;
  return DAYS.every((d) => Array.isArray((value as Record<string, unknown>)[d]));
};

export function PlanProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, emptyState);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.plan);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (isValidState(parsed)) {
        dispatch({ type: 'HYDRATE', state: parsed });
      } else if (isLegacyPlan(parsed)) {
        dispatch({
          type: 'HYDRATE',
          state: { days: parsed, restDays: emptyRest() },
        });
      }
    } catch {
      // ignore corrupt storage
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.plan, JSON.stringify(state));
    } catch {
      // quota or private mode — silent
    }
  }, [state]);

  const value: PlanContextValue = {
    plan: state.days,
    restDays: state.restDays,
    state,
    addExercise: (day, entry) => dispatch({ type: 'ADD_EXERCISE', day, entry }),
    addExercises: (day, entries) =>
      dispatch({ type: 'ADD_EXERCISES', day, entries }),
    removeExercise: (day, index) => dispatch({ type: 'REMOVE_EXERCISE', day, index }),
    updateEntry: (day, index, patch) =>
      dispatch({ type: 'UPDATE_ENTRY', day, index, patch }),
    clearDay: (day) => dispatch({ type: 'CLEAR_DAY', day }),
    clearAll: () => dispatch({ type: 'CLEAR_ALL' }),
    toggleRest: (day) => dispatch({ type: 'TOGGLE_REST', day }),
    hydrate: (next) => dispatch({ type: 'HYDRATE', state: next }),
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan(): PlanContextValue {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error('usePlan must be used within PlanProvider');
  return ctx;
}
