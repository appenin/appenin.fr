export const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

export function pageView(url: string) {
  if (typeof window._paq !== 'undefined') {
    window._paq.push(['setCustomUrl', url]);
    window._paq.push(['setDocumentTitle', document.title]);
    window._paq.push(['trackPageView']);
  }
}

export function pushEvent({ action, category, name }: any) {
  if (typeof window._paq !== 'undefined') {
    const data = ['trackEvent', category, `${category}_${action}`, name];
    window._paq.push(data);
  }
}
