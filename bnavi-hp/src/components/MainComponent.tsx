import * as React from "react";

import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, {
  WithStyles,
  StyleRules
} from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

import HeaderMenu from './HeaderMenu';
import blueGrey from '@material-ui/core/colors/blueGrey';


const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      textAlign: "center",
      backgroundColor: blueGrey[900]
    },
    header: {
      backgroundColor: blueGrey[900],
      boxShadow: theme.shadows[2],
      padding: theme.spacing(2),
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
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MainComponent);