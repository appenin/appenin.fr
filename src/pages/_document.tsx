import Document, { Head, Html, Main, NextScript } from 'next/document';
import { GA_MEASUREMENT_ID } from '@/libs/google';
import { getCssText, globalCss, reset } from '@/styles';

export const globalStyles = globalCss(reset);

export default class AppDocument extends Document {
  render() {
    globalStyles();

    return (
      <Html>
        <Head>
          <link href={process.env.fontInter} rel="stylesheet" />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <style id="theme">{`
:root {
  --body-overflow: inherit;
  --icons-dot: url(/assets/icons/dot.svg);
  --transition-duration: 200ms;
  --transition-timingFunction: cubic-bezier(0.4, 0, 0.2, 1);
}
          `}</style>
          <script
            id="gtag-init"
            dangerouslySetInnerHTML={{
              __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', {
  page_path: window.location.pathname,
});
        `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
