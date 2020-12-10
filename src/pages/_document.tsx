import Document, { Head, Html, Main, NextScript } from 'next/document'

class _Document extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
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

export default _Document;
