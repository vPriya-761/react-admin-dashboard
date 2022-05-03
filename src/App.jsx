// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
// import "./app.css"
// import Box from '@mui/material/Box';

// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// function App() {

//   const [open, setOpen] = useState(false);
//   return (
//     <Box className='sidebar' sx={{ display: 'flex', flexDirection: "column" }}>
//       <Topbar open={open} setOpen={setOpen} />
//       <Box sx={{ display: 'flex' }}>
//         {/* <Sidebar open={open} setOpen={setOpen} /> */}
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           <DrawerHeader />
     
//         </Box></Box>
//     </Box>
//   );
// }

// export default App;

import React from 'react'
import clsx from 'clsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { useState } from 'react'
import AppMenu from './AppMenu'
import Topbar from './components/topbar/Topbar';

const PageDashboard = () => <Typography variant="h3" component="h1">Dashboard Page</Typography>
const PageOrders = () => <Typography variant="h3" component="h1">Orders Page</Typography>
const PageCustomers = () => <Typography variant="h3" component="h1">Customers Page</Typography>
const PageReports = () => <Typography variant="h3" component="h1">Reports Page</Typography>

const App = () => {
  
  
  const classes = useStyles()
    const [open, setOpen] = useState(false);

  return (

    
    <BrowserRouter>
      <div className={clsx('App', classes.root)}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          open={open}
        >
        
          <AppMenu open={open} setOpen={setOpen}/>
         
        </Drawer>
        <Topbar  open={open} setOpen={setOpen} />
       


    
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>

            <Routes>
              <Route path="/" exact component={PageDashboard} />
              <Route path="/orders" component={PageOrders} />
              <Route path="/customers" component={PageCustomers} />
              <Route path="/reports" component={PageReports} />
            </Routes>

          </Container>
        </main>
      </div>
    </BrowserRouter>

  )
}

const drawerWidth = 230

const useStyles = makeStyles(theme => ({
  
  drawerPaper: {
    position: 'fixed',
    BorderRight:'1px solid transparent',
    width: drawerWidth,
   
    background: '#34444c',
    color: '#fff',
    zIndex:'1001',
    transition:'all 0.2s ease-in-out 0s',
    bottom:'0',
    marginTop:'0',
    left:'0'
  },
  
}))

export default App