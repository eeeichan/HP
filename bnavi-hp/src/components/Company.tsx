import * as React from 'react';
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, {
  WithStyles,
  StyleRules
} from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import blueGrey from '@material-ui/core/colors/blueGrey';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    companyBody: {
      textAlign: "center",
      backgroundColor: blueGrey[900],
      height: '100%'
    },
    tableCell: {
      color: blueGrey[50]
    }
  });

interface Props extends WithStyles<typeof styles> {
  title?: string;
}


class MainComponent extends React.Component<Props> {

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.companyBody}>
        <h3>Company</h3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableCell}>
                <h4>会社名</h4>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h4>ビューティーナビ株式会社</h4>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>
                <h4>設立</h4>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h4>2007年6月1日</h4>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>
                <h4>資本金</h4>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h4>3億900万円</h4>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>
                <h4>事業所</h4>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h4>〒107-6011</h4>
                <h4>東京都港区赤坂1-12-32アーク森ビル11F</h4>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>
                <h4>TEL</h4>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h4>03-5570-0333</h4>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default withStyles(styles)(MainComponent);