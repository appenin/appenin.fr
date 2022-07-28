import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
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
      <Component {...pageProps} />
      <Script type="text/javascript" src="https://cache.consentframework.com/js/pa/31787/c/tn6wJ/stub" />
      <Script type="text/javascript" src="https://choices.consentframework.com/js/pa/31787/c/tn6wJ/cmp" async />
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
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function(w,d,s,l,i){
 w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
 var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
 j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
 f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MJJKDNJ');`,
        }}
      />
    </>
  );
}
