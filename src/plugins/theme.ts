import { createMuiTheme } from '@material-ui/core/styles';
import { amber } from "@material-ui/core/colors";

/**
 * Create a theme instance.
 *
 * @see https://material-ui.com/guides/server-rendering/#server-rendering
 * @see https://material-ui.com/customization/color/#color-palette
 */
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: amber['A700'],
    },
    secondary: {
      main: amber['A700'],
    },
    text: {
      primary: '#222',
    },
    background: {
      default: '#f5f5f6',
    },
  },
});

