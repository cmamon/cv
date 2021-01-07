import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#32CD32"/>
          <meta name="keywords" content="Christophe QUENETTE" />
          <meta name="author" content="Christophe QUENETTE" key="author" />
          <meta name="description" content="Curriculum Vitæ de Christophe QUENETTE" key="description" />
          <meta name="image" content="https://cv.cmamon.vercel.app/images/profile-image.jpg" />
          <meta name="url" content="https://cv.cmamon.vercel.app/" key="url" />

          <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
          <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
          <link rel="apple-touch-icon" href="/icons/apple-icon.png"></link>

          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
