import Document, { Head, Html, Main, NextScript } from 'next/document';
import { getCssText, globalCss, reset } from '@/styles';

export const globalStyles = globalCss(reset);

export default class AppDocument extends Document {
  render() {
    globalStyles();

    return (
      <Html>
        <Head>
          {/*<meta content="notranslate" name="google" />*/}
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
