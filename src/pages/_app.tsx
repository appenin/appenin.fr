import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import CookieConsent, { CookieConsentProvider, ServiceId } from '@/components/cookieConsent';
import { MATOMO_SITE_ID, pageView } from '@/libs/matomo';
import { seo } from '@/libs/seo';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function App({ Component, pageProps, router: { events } }: AppProps) {
  useEffect(() => {
    events.on('routeChangeComplete', pageView);

    return () => {
      events.off('routeChangeComplete', pageView);
    };
  }, [events]);

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo {...seo} />
      <CookieConsentProvider>
        <Component {...pageProps} />
        <CookieConsent serviceId={ServiceId.novocall} strategy="afterInteractive" />
      </CookieConsentProvider>
      <Script
        id="matomo-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
var _paq = window._paq = window._paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u='${process.env.analytics}';
  _paq.push(['setTrackerUrl', u+'/matomo.php']);
  _paq.push(['setSiteId', '${MATOMO_SITE_ID}']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.src=u+'/matomo.js'; s.parentNode.insertBefore(g,s);
})();
        `,
        }}
      />
    </>
  );
}
