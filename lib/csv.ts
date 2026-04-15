import { exerciseById } from '@/data/exercises';
import { DAYS, DAY_LABELS } from './constants';
import type { RestDays, WeeklyPlan } from './plan-context';

const escapeCsv = (value: string | number): string => {
  const s = String(value);
  if (/[",\n]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
};

export function planToCsv(plan: WeeklyPlan, restDays?: RestDays): string {
  const lines: string[] = ['Day,Exercise,Sets,Reps'];
  for (const day of DAYS) {
    if (restDays?.[day]) {
      lines.push([escapeCsv(DAY_LABELS[day]), 'Rest Day', '-', '-'].join(','));
      continue;
    }
    for (const entry of plan[day]) {
      const name = exerciseById[entry.id]?.name ?? entry.id;
      lines.push(
        [escapeCsv(DAY_LABELS[day]), escapeCsv(name), entry.sets, entry.reps].join(','),
      );
    }
  }
  return lines.join('\n');
}

export function downloadPlanCsv(
  plan: WeeklyPlan,
  restDays?: RestDays,
  filename = 'workout-plan.csv',
): void {
  const csv = planToCsv(plan, restDays);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
