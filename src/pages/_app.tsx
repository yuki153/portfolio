import { AppProps } from 'next/app';
import { StylesProvider } from '@material-ui/core/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider injectFirst>
      <Component {...pageProps} />
    </StylesProvider>
  );
}

export default MyApp
