import React from 'react';
import { AppProps } from 'next/app';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as EmThemeProvider} from 'emotion-theming';
import { theme } from '../plugins/theme';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <StylesProvider injectFirst>
      <EmThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <Component {...pageProps} />
      </MuiThemeProvider>
      </EmThemeProvider>
    </StylesProvider>
  );
}

export default MyApp
