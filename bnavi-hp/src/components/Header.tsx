import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  button: {
    // margin: theme.spacing(1),
    color: deepPurple[50],
    borderColor: deepPurple[50]
  },
  input: {
    display: 'none'
  },
  h3: {
    fontSize: '25px',
    color: deepPurple[50]
  },
});

export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  type DrawerSide = 'top' | 'left' | 'bottom' | 'right';
  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = (side: DrawerSide) => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Home', 'Press Release', 'Recruiting'].map((text, index) => (
          <ListItem button={true} key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Company', 'Privacy policy', 'Inquiry'].map((text, index) => (
          <ListItem button={true} key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Grid item={true} xs={12} sm={6}>
        <h3>ビューティーナビ株式会社</h3>
      </Grid>
      <Grid item={true} xs={12} sm={6}>
        <Button variant="outlined" className={classes.button} onClick={toggleDrawer('top', true)} >
          MENU
        </Button>
        <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
          {fullList('top')}
        </Drawer>
      </Grid>
    </div>
  );
}