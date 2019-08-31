import * as React from 'react';
import { makeStyles, Theme, createStyles, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Home from './Home';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { ThemeProvider } from '@material-ui/styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerBody: {
      flexGrow: 1,
      backgroundColor: blueGrey[900],
      // backgroundColor: theme.palette.background.paper,
    },
    Tab: {
      color: blueGrey[50]
    },
    h1: {
      color: blueGrey[50]
    }
  }),
);

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  const theme = createMuiTheme({
    palette: {
      primary: { main: blueGrey[900] }, // Purple and green play nicely together.
      secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
  });
  

  return (
    <div className={classes.headerBody}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <h1>ビューティーナビ株式会社</h1>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" textColor="white">
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="Press Release" {...a11yProps(1)} />
            <Tab label="Recruit" {...a11yProps(2)} />
            <Tab label="Company" {...a11yProps(3)} />
            <Tab label="Privacy policy" {...a11yProps(4)} />
            <Tab label="Inquiry" {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Home />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Press Release
        </TabPanel>
        <TabPanel value={value} index={2}>
          Recruit
        </TabPanel>
        <TabPanel value={value} index={3}>
          Company
        </TabPanel>
        <TabPanel value={value} index={4}>
          Privacy policy
        </TabPanel>
        <TabPanel value={value} index={5}>
          Inquiry
        </TabPanel>
      </ThemeProvider>
    </div>
  );
}