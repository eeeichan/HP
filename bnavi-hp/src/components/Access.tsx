import * as React from 'react';
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, {
  WithStyles,
  StyleRules
} from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import blueGrey from '@material-ui/core/colors/blueGrey';

import GoogleMap from './GoogleMap';


const styles = (theme: Theme): StyleRules =>
  createStyles({
    accessbody: {
      width: '100%',
      textAlign: "center",
      backgroundColor: blueGrey[900]
    },
    img: {
    },
  });

interface Props extends WithStyles<typeof styles> {
  title?: string;
}


class About extends React.Component<Props> {

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.accessBody}>
        <h3>Access</h3>
        <GoogleMap />
      </div>
    );
  }
}

export default withStyles(styles)(About);