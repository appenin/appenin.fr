export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

//https://developers.google.com/analytics/devguides/collection/gtagjs/single-page-applications
export function pageView(url: string) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
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
