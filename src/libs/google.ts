export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

//https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageView(url: string) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('set', 'page_path', url);
    window.gtag('event', 'page_view');
  }
}

//https://developers.google.com/analytics/devguides/collection/gtagjs/events
export function pushEvent({ action, category, label }: any) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
}
