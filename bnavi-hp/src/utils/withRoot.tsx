import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// 任意の Theme Colors
import lightblue from '@material-ui/core/colors/lightBlue';
import blueGrey from '@material-ui/core/colors/blueGrey';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  // Theme Colors
  palette: {
    primary: lightblue,
    secondary: blueGrey,
  },
  // typography
  typography: {
  }
});

function withRoot<P>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;