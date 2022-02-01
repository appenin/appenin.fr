import { useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { GA_TRACKING_ID, pageView } from '@/libs/google';

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
      <Component {...pageProps} />
      <Script
        id="google-script"
        src={`${process.env.analytics}${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-init"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}', {
  page_path: window.location.pathname,
});
        `,
        }}
        strategy="afterInteractive"
      />
      <Script id="novocall-script" src={process.env.novocall} strategy="afterInteractive" />
    </>
  );
}
