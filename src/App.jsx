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
import { Link } from "react-router-dom";
import AdminDashboard from './components/AdminDashboard/AdminDashboard'

import { Chat } from '@material-ui/icons'
import { Calls } from './components/Applications/Calls'
import Calendar from './components/Applications/Calendar'
import { Email } from './components/Applications/Email'
import { FileManager } from './components/Applications/FileManager'
import { Contacts } from './components/Applications/Contacts'
import { Holidays } from './components/Employees/Holidays'
import { LeavesAdmin } from './components/Employees/LeaveAdmin'
import { LeavesEmployee } from './components/Employees/LeavesEmployee'
import { LeaveSettings } from './components/Employees/LeaveSettings'
import { Departments } from './components/Employees/Demartments'
import { Designations } from './components/Employees/Designations'
import { Timesheet } from './components/Employees/Timesheet'
import { ShiftAndSchedule } from './components/Employees/ShiftAndSchedule'
import { Overtime } from './components/Employees/Overtime'
import { UserDashboard } from './components/Jobs/UserDashboard'
import { JobsDashboard } from './components/Jobs/jobsDashboard'
import { AllEmployees } from './components/Employees/AllEmployees'
import { Categories } from './components/Accounting/Categories'
import { BudgetExpenses } from './components/Accounting/BudgetExpenses'
import { BudgetRevenues } from './components/Accounting/BudgetRevenues'
import { Budgets } from './components/Accounting/Budgets'
import { AttendanceAdmin } from './components/Employees/AttendanceAdmin'
import { AttendanceEmployee } from './components/Employees/AttendanceEmployee'
import { EmployeeDashboard } from './components/EmployeeDashboard/EmployeeDashboard'



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
             
        <Route path="/" element={<AdminDashboard/>} />
        <Route path="employeedashboard" element={<EmployeeDashboard/>} />
        {/*Applications */}
        <Route path="chat" element={<Chat />} />
        <Route path="calls" element={<Calls />} />
        <Route path="calender" element={<Calendar />} />
        <Route path="email" element={<Email />} />
        <Route path="filemanager" element={<FileManager />} />
        <Route path="contacts" element={<Contacts />} />

        {/*Employees*/}
        <Route path="allemployees" element={<AllEmployees />} />
        <Route path="holidays" element={<Holidays />} />
        <Route path="leavesAdmin" element={<LeavesAdmin />} />
        <Route path="leavesEmployee" element={<LeavesEmployee />} />
        <Route path="leaveSettings" element={<LeaveSettings />} />
        <Route path="attendanceAdmin" element={<AttendanceAdmin />} />
        <Route path="attendanceEmployee" element={<AttendanceEmployee />} />
        <Route path="departments" element={<Departments />} />
        <Route path="designations" element={<Designations />} />
        <Route path="timesheet" element={<Timesheet />} />
        <Route path="shiftAndSchedule" element={<ShiftAndSchedule />} />
        <Route path="overtime" element={<Overtime />} />

        {/*Projects */}
        {/* <Route path="projects" element={<Projects />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="taskBoard" element={<TaskBoard />} /> */}

        {/*Sales*/}
        {/* <Route path="estimates" element={<Estimates />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="payments" element={<Payments />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="providentFund" element={<ProvidentFund />} />
        <Route path="taxes" element={<Taxes />} /> */}

        {/*Accounting*/}
        <Route path="categories" element={<Categories />} />
        <Route path="budgets" element={<BudgetExpenses />} />
        <Route path="budgetExpenses" element={<BudgetRevenues />} />
        <Route path="budgetRevenues" element={<Budgets />} />

        {/*Payroll*/}
        {/* <Route path="employeeSalary" element={<EmployeeSalary />} />
        <Route path="payslip" element={<Payslip />} />
        <Route path="payrollItems" element={<PayrollItems />} /> */}

        {/*Reports*/}
        {/* <Route path="expenseReport" element={<ExpenseReport />} />
        <Route path="invoiceReport" element={<InvoiceReport />} />
        <Route path="paymentsReport" element={<PaymentsReport />} />
        <Route path="projectReport" element={<ProjectReport />} />
        <Route path="taskReport" element={<TaskReport />} />
        <Route path="userReport" element={<UserReport />} />
        <Route path="employeeReport" element={<EmployeeReport />} />
        <Route path="payslipReport" element={<PayslipReport />} />
        <Route path="attendanceReport" element={<AttendanceReport />} />
        <Route path="leaveReport" element={<LeaveReport />} />
        <Route path="dailyReport" element={<DailyReport />} /> */}

        {/*Performance*/}
        {/* <Route path="performanceIndicator" element={<PerformanceIndicator />} />
        <Route path="performanceReview" element={<PerformanceReview />} />
        <Route path="performanceAppraisal" element={<PerformanceAppraisal />} /> */}

        {/*Goals*/}
        {/* <Route path="goalList" element={<GoalList />} />
        <Route path="goalType" element={<GoalType />} /> */}

        {/*Training*/}
        {/* <Route path="trainingList" element={<TrainingList />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="trainingType" element={<TrainingType />} /> */}

        {/*Jobs*/}
        {/* <Route path="userDashboard" element={<UserDashboard />}/>
        <Route path="jobsDashboard" element={<JobsDashboard />}/>
        <Route path="manageJobs" element={<ManageJo />}/>
        <Route path="manageResumes" element={<ManageResumes />}/>
        <Route path="shortlistCandidates" element={<ShortlistCandidates />}/>
        <Route path="interviewQuestions" element={<InterviewQuestions />}/>
        <Route path="offerApprovals" element={<OfferApprovals />}/>
        <Route path="experienceLevel" element={<ExperienceLevel />}/>
        <Route path="candidatesList" element={<CandidatesList />}/>
        <Route path="scheduleTiming" element={<ScheduleTiming />}/>
        <Route path="aptitudeResults" element={<AptitudeResults />}/> */}
            </Routes>

          </Container>
          <div className={classes.scrollbar}></div>

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
  scrollBar:{
    position:'relative',
    display: 'block',
    width:'100%',
    cursor:'pointer',
    BorderRadius:'inherit',
BackgroundColor:"rgba(0,0,0,0.2)",
height: '30px',
transform:'translatey(178.083px)'
  }
  
}))

export default App