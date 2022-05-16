import Document, { Head, Html, Main, NextScript } from 'next/document';
import { getCssText, globalCss, reset } from '@/styles';

export const globalStyles = globalCss(reset);

export default class AppDocument extends Document {
  render() {
    globalStyles();

    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
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
