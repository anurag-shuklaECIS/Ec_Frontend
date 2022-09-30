import Document, { Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';
import { setup } from 'twind';
import { asyncVirtualSheet, getStyleTagProperties } from 'twind/server';
import twindConfig from '../twind.config';

const sheet = asyncVirtualSheet();

setup({ ...twindConfig, sheet });

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    sheet.reset();
    const initialProps = await Document.getInitialProps(ctx);
    const { id, textContent } = getStyleTagProperties(sheet);
    const styleProps = {
      id,
      key: id,
      dangerouslySetInnerHTML: {
        __html: textContent,
      },
    };

    return {
      ...initialProps,
      styles: [
        ...initialProps.styles,
        React.createElement(`style`, styleProps),
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
       
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
