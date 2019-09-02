import * as React from 'react';
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, {
  WithStyles,
  StyleRules
} from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
// import blueGrey from '@material-ui/core/colors/blueGrey';

import './Contents.css';
import { darkWhite } from 'material-ui/styles/colors';


const styles = (theme: Theme): StyleRules =>
  createStyles({
    mainBody: {
      textAlign: "center",
      width: '100%',
      height: '100%',
      // backgroundColor: blueGrey[900]
    },
    titleBody: {
      position: "absolute",
      zIndex: 9999,
      width: '100%',
      height: '100%',
      marginTop: '350px'
    },
    title: {
      fontSize: '35px',
      color: darkWhite
    },
  });

interface Props extends WithStyles<typeof styles> {
  title?: string;
}


class Contents extends React.Component<Props> {

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainBody}>
        <div className="main">
          <div className={classes.titleBody}>
            <h1 className={classes.title}>BeautyNavi</h1>
          </div>
          <img className="main__img no1" src="/top01.jpg" alt="img01" width="100%" height="100%"/>
          <img className="main__img no2" src="/top02.jpg" alt="img02" width="100%" height="100%"/>
          <img className="main__img no3" src="/top03.jpg" alt="img03" width="100%" height="100%"/>
          <img className="main__img no4" src="/top04.jpg" alt="img04" width="100%" height="100%"/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Contents);