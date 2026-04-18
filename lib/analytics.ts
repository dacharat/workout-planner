type UmamiEventData = Record<string, string | number | boolean>;

declare global {
  interface Window {
    umami?: {
      track: (
        event: string | ((props: Record<string, unknown>) => Record<string, unknown>),
        data?: UmamiEventData,
      ) => void;
    };
  }
}

export function trackEvent(event: string, data?: UmamiEventData): void {
  if (typeof window === 'undefined') return;
  window.umami?.track(event, data);
}
