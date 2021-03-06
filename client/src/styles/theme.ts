import darkScrollbar from '@mui/material/darkScrollbar';
import { createTheme } from '@mui/material/styles';

import { LinkBehavior } from 'components';

const baseTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00FF00',
    },
  },
});

export const theme = createTheme(baseTheme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: baseTheme.palette.mode === 'dark' ? darkScrollbar() : null,
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});
