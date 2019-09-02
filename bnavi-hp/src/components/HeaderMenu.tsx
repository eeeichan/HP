import * as React from 'react';
import { makeStyles, Theme, createStyles, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

import blueGrey from '@material-ui/core/colors/blueGrey';
import { ThemeProvider } from '@material-ui/styles';



// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: any;
//   value: any;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       <Box p={3}>{children}</Box>
//     </Typography>
//   );
// }

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: theme.palette.background.paper,
    },
    headerBody: {
      backgroundColor: theme.palette.background.paper,
      width: '100%',
      display: 'flex'
    },
    headerLogo: {
      width: '100%',
      textAlign: 'left',
      marginLeft: '10px',
      color: blueGrey[900]
    },
    headerMenuBar: {
      width: '100%',
      height: '100%',
      paddingTop: '15px',
      color: blueGrey[900]
    },
    headerTab: {
      margin: '0 auto',
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
    <div className={classes.header}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <div className={classes.headerBody}>
            <div className={classes.headerLogo}>
              <h1>Beauty Navi, Inc.</h1>
            </div>
            <div className={classes.headerMenuBar}>
              <Tabs className={classes.headerTab} value={value} onChange={handleChange} aria-label="simple tabs example" textColor="white">
                <Tab label="About" {...a11yProps(0)} />
                <Tab label="News" {...a11yProps(1)} />
                <Tab label="Service" {...a11yProps(2)} />
                <Tab label="Career" {...a11yProps(3)} />
              </Tabs>
            </div>
          </div>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}