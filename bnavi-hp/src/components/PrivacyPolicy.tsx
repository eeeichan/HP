import * as React from 'react';
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, {
  WithStyles,
  StyleRules
} from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import blueGrey from '@material-ui/core/colors/blueGrey';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    mainBody: {
      textAlign: "center",
      backgroundColor: blueGrey[900]
    },
    img: {
    },
  });

interface Props extends WithStyles<typeof styles> {
  title?: string;
}


class MainComponent extends React.Component<Props> {

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainBody}>
        <h1>個人情報保護方針...</h1>
      </div>
    );
  }
}

export default withStyles(styles)(MainComponent);