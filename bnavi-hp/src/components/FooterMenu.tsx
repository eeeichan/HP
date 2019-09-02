import * as React from 'react';
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, {
  WithStyles,
  StyleRules
} from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import blueGrey from '@material-ui/core/colors/blueGrey';
import { Grid, Paper } from '@material-ui/core';
import Company from './Company';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    footerBody: {
      textAlign: "center",
      backgroundColor: blueGrey[900],
      minHeight: '100%'
    },
    footerTitle: {
      padding: '10px',
      color: blueGrey[50]
    },
    gridBody: {
      backgroundColor: blueGrey[900]
    },
    paper: {
      height: '100%',
      color: blueGrey[50],
      backgroundColor: blueGrey[900]
    }
  });

interface Props extends WithStyles<typeof styles> {
  title?: string;
}


class FooterMenu extends React.Component<Props> {

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.footerBody}>
        <Grid container={true} spacing={5}>
          <Grid item={true} xs={true}>
            <Paper className={classes.paper}>
              <h1 className={classes.footerTitle}>BeautyNavi, Inc</h1>
            </Paper>
          </Grid>
          <Grid item={true} xs={true}>
            <Paper className={classes.paper}>
              <Company />
            </Paper>
          </Grid>
          <Grid item={true} xs={true}>
            <Paper className={classes.paper}><h1>Q&A</h1></Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(FooterMenu);