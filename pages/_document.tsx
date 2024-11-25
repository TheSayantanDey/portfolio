import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta property="og:type" content="website" />

          <meta name="twitter:dnt" content="on" />
          <meta name="twitter:url" content="https://github.io/thesayantandey" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@sayantandey" />
          <meta name="twitter:creator" content="@sayantandey" />

          
        </Head>
        <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
