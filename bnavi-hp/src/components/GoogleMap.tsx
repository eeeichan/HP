import * as React from 'react';
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, {
  WithStyles,
  StyleRules
} from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";


const styles = (theme: Theme): StyleRules =>
  createStyles({
    sample: {
      width: '100%',
      height: '400px'
    },
  });

interface Props extends WithStyles<typeof styles> {
  title?: string;
}

function initMap() {
  const map = new google.maps.Map(document.getElementById('sample'), { // #sampleに地図を埋め込む
      center: { // 地図の中心を指定
          lat: 35.667331, // 緯度
          lng: 139.740135 // 経度
      },
      zoom: 20 // 地図のズームを指定
  });
  return map;
}

class GoogleMap extends React.Component<Props> {
  
  public componentDidMount() {
    initMap();
  }
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainBody}>
        <div id="sample" className={classes.sample}/>
      </div>
    );
  }
}

export default withStyles(styles)(GoogleMap);