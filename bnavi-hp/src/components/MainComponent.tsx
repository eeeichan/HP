import * as React from "react";

import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, {
  WithStyles,
  StyleRules
} from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
// import blueGrey from '@material-ui/core/colors/blueGrey';

import HeaderMenu from './HeaderMenu';
import FooterMenu from './FooterMenu';
import Contents from './Contents';


const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      textAlign: "center",
      backgroundColor: theme.palette.background.paper,
    },
    counter: {
      fontSize: 60
    },
  });

interface Props extends WithStyles<typeof styles> {
  title?: string;
}

class MainComponent extends React.Component<Props> {

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <HeaderMenu/>
          <Contents />
          <FooterMenu />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MainComponent);