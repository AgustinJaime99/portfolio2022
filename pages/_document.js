import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='es' className='scroll-smooth' style={{ scrollBehavior: 'smooth' }}>
        <Head>
          <script async defer src='https://static.cdn.prismic.io/prismic.js?new=true&repo=germanguerci'></script>
          <meta name='description' content='Agustin Jaime Front-end developer site' />
          <meta name='keywords' content='react, frontend, developer, front end engineer' />
          <meta name='author' content='Agustin Diego Jaime' />
          <meta name='copyright' content='Agustin Diego Jaime' />
          <meta property='og:locale' content='es' />
          <meta property='og:title' content='Agustin Jaime Dev' />
          {/* <meta property='og:url' content='https://www.germanguerci.dev' /> */}
          <meta property='og:image' content='/main-logo.svg' />
          <meta property='og:description' content='Agustin Jaime Front-end developer site' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link
            href='https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&family=Montserrat:wght@400;500&display=swap'
            rel='stylesheet'
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
