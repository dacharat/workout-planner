/** ISO week number (1–53). */
export function isoWeekNumber(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

/** Monday→Sunday range label for the week containing `date`, e.g. "APR 13–19". */
export function weekRangeLabel(date: Date): string {
  const day = date.getDay() || 7; // Sun=0 → 7
  const monday = new Date(date);
  monday.setDate(date.getDate() - (day - 1));
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const mMon = months[monday.getMonth()];
  const mSun = months[sunday.getMonth()];
  if (mMon === mSun) {
    return `${mMon} ${monday.getDate()}–${sunday.getDate()}`;
  }
  return `${mMon} ${monday.getDate()}–${mSun} ${sunday.getDate()}`;
}
