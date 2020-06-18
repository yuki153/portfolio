import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets　} from '@material-ui/core/styles';
const sheets = new ServerStyleSheets();

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

    // Return the ReactElement of empty style.
    // sheets.getStyleElement()

    // Run ctx.renderPage by getInitialProps(ctx)
    // The Contents of the "sheets.getStyleElement" is given after running "sheets.collect()".
    const initialProps = await Document.getInitialProps(ctx)

    // true
    console.log(Array.isArray(initialProps.styles));

    // return { html, head, styles }
    // Used by Html, Head, Main rendering.
    // ref: https://github.com/vercel/next.js/blob/canary/packages/next/pages/_document.tsx
    return {
      ...initialProps,
      // https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js#L66
      // => styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]

      // initialProps.styles: ReactElement[] | ReactNode[] | {}
      // ...initialProps.styles is Array<ReactElement> but this is type error due to union.
      styles: [ ...initialProps.styles as any, sheets.getStyleElement()]

      // Below code return type is not correct ReactElement[], but it works fine because React render to loop automatically.
      // styles: [ initialProps.styles, sheets.getStyleElement() ]
    }
  }

  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
