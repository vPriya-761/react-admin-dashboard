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
import AppMenu from './components/sidebar1/AppMenu'
import Topbar from './components/topbar/Topbar';

//const PageDashboard = () => <Typography variant="h3" component="h1">Dashboard Page</Typography>
const PageDashboard1 = () => <Typography variant="h3" component="h1">Dashboard Page</Typography>
const PageApps =() => <Typography vatiant = "h3" component="h1">PageApp</Typography>
const PageEmployees = () => <Typography variant="h3" component="h1">Employes Page</Typography>
const PageClients = () => <Typography variant="h3" component="h1">Customers Page</Typography>
const PageProjects = () => <Typography variant="h3" component="h1">Project page</Typography>

const PageLeads = () => <Typography variant="h3" component="h1">Leads Page</Typography>
const PageTickets = () => <Typography variant="h3" component="h1">Tickets Page</Typography>
const PageSales = () => <Typography variant="h3" component="h1">Sales Page</Typography>
const PageAccounting = () => <Typography variant="h3" component="h1">Accounting Page</Typography>
const PagePayroll = () => <Typography variant="h3" component="h1">Payroll Page</Typography>
const PagePolicies = () => <Typography variant="h3" component="h1">Polices Page</Typography>

const PageReports = () => <Typography variant="h3" component="h1">Reports Page</Typography>
const PagePerformance = () => <Typography variant="h3" component="h1">Performance Page</Typography>
const PageGoals = () => <Typography variant="h3" component="h1">Goals Page</Typography>
const PageTraining = () => <Typography variant="h3" component="h1">Training Page</Typography>
const PagePromotion = () => <Typography variant="h3" component="h1">Promotion Page</Typography>
const PageResignation = () => <Typography variant="h3" component="h1">Resignation Page</Typography>
const PageTermination = () => <Typography variant="h3" component="h1">Termination Page</Typography>

const PageJobs = () => <Typography variant="h3" component="h1">Jobs</Typography>
const PageKnowledgebase = () => <Typography variant="h3" component="h1">Knowledgebase</Typography>
const PageActivities = () => <Typography variant="h3" component="h1">Activities</Typography>
const PageUsers = () => <Typography variant="h3" component="h1">Users</Typography>
const PageSettings = () => <Typography variant="h3" component="h1">Settings</Typography>
const PageProfile = () => <Typography variant="h3" component="h1">Profile</Typography>
const PageAuthentication = () => <Typography variant="h3" component="h1">Authentication</Typography>

const PageErrorPages = () => <Typography variant="h3" component="h1">ErrorPages </Typography>
const PageSubscriptions = () => <Typography variant="h3" component="h1">Subscriptions</Typography>
const PagePages = () => <Typography variant="h3" component="h1">Pages</Typography>
const PageComponents= () => <Typography variant="h3" component="h1">Components</Typography>

const PageForms = () => <Typography variant="h3" component="h1">Forms</Typography>
const PageTables = () => <Typography variant="h3" component="h1">Tables </Typography>
const PageDocumentation = () => <Typography variant="h3" component="h1">Documentation</Typography>
const PageChangeLog= () => <Typography variant="h3" component="h1">ChangeLog</Typography>


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
              <Route path="/" exact component={PageDashboard1} />

              <Route path="/apps" component={PageApps} />
              <Route path="/employees" component={PageEmployees} />
              <Route path="/clients" component={PageClients} />
              <Route path="/projects" component={PageProjects} />
              <Route path="/leads" component={PageLeads} />
              <Route path="/tickets" component={PageTickets} />
              <Route path="/sales" component={PageSales} />
              <Route path="/accounting" component={PageAccounting} />
              <Route path="/payroll" component={PagePayroll} />
              <Route path="/policies" component={PagePolicies} />
              <Route path="/reports" component={PageReports} />
              <Route path="/performance" component={PagePerformance} />
              <Route path="/goals" component={PageGoals} />
              <Route path="/training" component={PageTraining} />
              <Route path="/promotion" component={PagePromotion} />
              <Route path="/resignation" component={PageResignation} />
              <Route path="/termination" component={PageTermination} />

              <Route path="/jobs" component={PageJobs} />
              <Route path="/knowledgebase" component={PageKnowledgebase} />
              <Route path="/activities" component={PageActivities} />
              <Route path="/users" component={PageUsers} />
              <Route path="/settings" component={PageSettings} />
              <Route path="/profile" component={PageProfile} />
              <Route path="/authentication" component={PageAuthentication} />
              <Route path="/errorpages" component={PageErrorPages} />

              <Route path="/subscription" component={PageSubscriptions} />
              <Route path="/pages" component={PagePages} />
              <Route path="/components" component={PageComponents} />
              <Route path="/form" component={PageForms} />
              <Route path="/tables" component={PageTables} />
              <Route path="/documentation" component={PageDocumentation} />
              <Route path="/changelog" component={PageChangeLog} />

            </Routes>

          </Container>
        </main>
      </div>
    </BrowserRouter>

  )
}

// const example = styled(Button)`
// border
// `

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
    left:'0',
    overflowY:'scroll',
    maxHeight: 'class(100vh-9rem)'
  },
  
}))

export default App