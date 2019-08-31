import * as React from "react";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, {
  WithStyles,
  StyleRules
} from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

// Components
import MainComponent from './components/MainComponent';

// withRoot を import
import withRoot from './utils/withRoot';

// styles を定義
const styles = (theme: Theme): StyleRules => createStyles({
  root: {

  }
});

// 型定義 Props を定義
type Props = WithStyles<typeof styles>;

// App Component を定義
const App: React.FC<Props> = ({ classes }: Props) => (
  <div className={classes.root}>
    <MainComponent />
  </div>
);

// withRoot で export
export default withRoot(withStyles(styles)(App));