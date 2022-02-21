import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import CookieConsent, { CookieConsentProvider, ServiceId } from '@/components/cookieConsent';
import { GA_MEASUREMENT_ID, pageView } from '@/libs/google';
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
        <CookieConsent serviceId={ServiceId.ga} strategy="afterInteractive" />
        <Script
          id="ga-init"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', {
  //'anonymize_ip': true,
  'send_page_view': false,
});
gtag('set', 'page_path', window.location.pathname);
gtag('event', 'page_view');
        `,
          }}
        />
        <CookieConsent serviceId={ServiceId.novocall} strategy="afterInteractive" />
      </CookieConsentProvider>
    </>
  );
}
