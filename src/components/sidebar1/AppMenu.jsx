import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';

import List from '@material-ui/core/List'

import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import SwipeLeftOutlinedIcon from '@mui/icons-material/SwipeLeftOutlined';
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import DynamicFormOutlinedIcon from '@mui/icons-material/DynamicFormOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import AppMenuItem from './AppMenuItem'

const appMenuItems = [
  {
    name: 'Dashboard',
   
    Icon: FileCopyOutlinedIcon,
    items: [
      {
        name: 'Level 2',
      },
      {
        name: 'Level 2',
      
      },
    ],
    
  },
 
  {
    name: 'Dashboard',
   
    Icon: DashboardCustomizeOutlinedIcon,
    items: [
      {
        name: 'Admin Dashboard',
        link: '/admindashboard',
      },
      {
        name: ' Employee Dashboard',
        link: '/employeedashboard',
      
      },
    ],

  },
  {
    name: 'Apps',
  
    Icon: ViewInArOutlinedIcon,
    items: [
      {
        name: 'Chart',
        link: '/chart',
      },
      {
        name: ' Calls',
        link: '/calls',
      
      },
      {
        name: ' Calendar',
        link: '/calendar',
      
      },
      {
        name: ' Contacts',
        link: '/contacts',
      
      },
      {
        name: ' Email',
        link: '/email',
      
      },
      {
        name: ' File Manager',
        link: '/file manaer',
      
      },
    ],
  },
  {
    name: 'Employees',
    
    Icon: PersonOutlineOutlinedIcon,
    items: [
      {
        name: 'All Employees',
        link: '/all employes',
      },
      {
        name: ' Holidays',
        link: '/holidays',
      
      },
      {
        name: 'Leaves(Admin)',
        link: '/leaves(admin)',
      
      },
      {
        name: 'Leaves(Employee)', 
        link: '/leaves(employes)',

      
      },
      {
        name: ' Leave Settings',
        link: '/leave settings',
      
      },
      {
        name: ' Attendance(Admin) ',
        link: '/Attendance(Admin)',
      
      },
      {
        name: ' Attendance(Employee) ',
        link: '/Attendance(employee)',

        
      
      },
      {
        name: ' Departments ',
         link: '/Departments',

      
      },
      {
        name: ' Designations ',
        link: '/designations',
      
      },
      {
        name: ' Timesheet ',
        link: '/timesheet',
      
      },
      {
        name: ' Shift & Schedule ',
        link: '/shift&schedule',
      
      },
      {
        name: ' Overtime ',
        link: '/overtime',
      
      },
      
    ],
  },

  {
    name: 'Clients',
    link: '/clients',
    Icon: GroupOutlinedIcon,
  },
 

  {
    name: 'Projects',
    Icon: RocketLaunchOutlinedIcon,
    items: [
      {
        name: ' Projects',
        link: 'projects',
      },
      {
        name: 'Tasks',
        link: '/tasks',
      
      },
      {
        name: 'Tasks Board',
        link: '/tasksboard',
      
      },
    ],
  },
  {
    name: 'Leads',
    link: '/leads',
    Icon: PersonOutlineOutlinedIcon,
  },
  {
    name: 'Tickets',
    link: '/tickets',
    Icon: ConfirmationNumberOutlinedIcon,
  },
  {
    name: 'Sales',
    Icon: FileCopyOutlinedIcon,
    items: [
      {
        name: ' Estimates',
        link: '/estimates',
      },
      {
        name: 'Invoices',
        link: '/invoice',
      },
      {
        name: 'Payments ',
        link: '/payments',
      
      },
      {
        name: 'Expenses ',
        link: 'expenses',
      
      },
      {
        name: 'Provident Fund ',
        link: 'providentfund',
      
      },
      {
        name: 'Taxes ',
        link: '/taxes',
      
      },
    ],
  },
  {
    name: 'Accounting',
    Icon: FileCopyOutlinedIcon,
    items: [
      {
        name: ' Categories',
        link: '/categories',
      },
      {
        name: 'Budgets',
        link: '/budgets',
      
      },
      {
        name: 'Budget Expenses ',
        link: '/budgetexpenses',
      
      },
      {
        name: 'Budget Revenues ',
        link: '/budgetrevenues',
      
      },
     
    ],
  },
  {
    name: 'Payroll',
    Icon: CurrencyRupeeOutlinedIcon,
    items: [
      {
        name: ' Employees Salary',
        link: '/employees salary',
      },
      {
        name: 'Payslip',
        link: '/payslip',
      
      },
      {
        name: 'Payroll Items',
        link: '/Attendance(employee)',
      
      },
      
     
    ],
  },
  {
    name: 'Policies',
    link: '/policies',
    Icon: PolicyOutlinedIcon,
  },
  {
    name: 'Reports',
    Icon: PieChartOutlinedIcon,
    items: [
      {
        name: ' Expense Rport',
        link: '/expensereport',
      },
      {
        name: 'Invoice Report',
        link: '/invoicereport',
      
      },
      {
        name: 'Project Report ',
        link: '/projectreport',
      
      },
      {
        name: 'Payments Report ', 
        link: '/paymentsreport',

      
      },
      {
        name: 'Task Report ',
        link: '/taskreport',
      
      },
      {
        name: 'User Report ',
        link: '/userreport',
      
      },
      {
        name: 'Employee Report ',
        link: '/employeereport',
      
      },
      {
        name: 'Payslip Report ',
        link: '/payslipreport',
      
      },
      {
        name: 'Attendance Report ',
        link: '/attendancereport',
      
      },
      {
        name: 'Leave Report ',
        link: '/leavereport',
      
      },
      {
        name: 'Daily Report ',
        link: '/dailyreport',
      
      },
     
    ],
  },

  {
    name: 'Performance',
    Icon: SchoolOutlinedIcon,
    items: [
      {
        name: ' Performance Indicater',
        link: '/performanceindicater',
      },
      {
        name: 'Performance Review',
        link: '/performancereview',
      
      },
      {
        name: 'Performance Appraisal ',
        link: '/performanceappraisal',
      },
    ],
  },
  {
    name: 'Goals',
    Icon: DonutLargeOutlinedIcon,
    items: [
      {
        name: 'Goal List',
        link: '/goalslist',
      },
      {
        name: 'Goal Type',
        link: '/goaltype',
      
      },
      
      
     
    ],
    
  },
  {
    name: 'Training',
    Icon: ModeEditOutlineOutlinedIcon,
    items: [
      {
        name: ' Training List',
        link: '/trainiglist',
      },
      {
        name: 'Trainers',
        link: '/trainers',
      
      },
      {
        name: 'Training Type',
        link: '/trainingtype',
      
      },
      
     
    ],
  },
  {
    name: 'Promotion',
    link: '/promation',
    Icon: CampaignOutlinedIcon,
  },
  {
    name: 'Resignation',
    link: '/resignation',
    Icon: AppRegistrationOutlinedIcon,
  },
  {
    name: 'Termination',
    link: '/termination',
    Icon: HighlightOffOutlinedIcon,
  },
  {
    name: 'Assets',
    link: '/termination',
    Icon: AddCardOutlinedIcon,
  },
  {
    name: 'Jobs',
    Icon: BusinessCenterOutlinedIcon,
    items: [
      {
        name: 'User Dashboard',
        link: '/userdashboard',
      },
      {
        name: 'jobs Dashboard',
        link: 'jobsdashboard',
      
      },
      {
        name: 'Manage Jobs',
        link: '/managejobs',
      },
      {
        name: ' Manage Resumes',
        link: '/manage',
      
      },
      {
        name: 'Shortlist Candidates',
        link: '/shortlistcandidates',
      },
      {
        name: 'Interview Questions ',
        link: '/interviewquestions',
      
      },
      {
        name: 'Offer Approvals',
        link: '/offerapprovals',
      },
      {
        name: 'Experience Level',
        link: '/experiencelevel',
      
      },
      {
        name: 'Candidater List',
        link: '/candidater list',
      },
      {
        name: 'Schedule timing',
        link: '/scheduletiming',
      
      },
      {
        name: 'Aptitude Result',
        link: 'aptituderesult ',
      },
      
      
     
    ],
    
  },
  {
    name: 'Knowledgebase',
    link: '/knowledgebase',
    Icon: QuestionMarkOutlinedIcon,
  },
  {
    name: 'Activities',
    link: '/activities',
    Icon: NotificationsNoneOutlinedIcon,
  },
  {
    name: 'Users',
    link: '/users',
    Icon: GroupAddOutlinedIcon,
  },
  {
    name: 'Settings',
    link: '/settings',
    Icon: SettingsOutlinedIcon,
  },
  {
    name: 'Profile',
    Icon: PermIdentityOutlinedIcon,
    items: [
      {
        name: 'Employee Profile',
      },
      {
        name: 'Client Profile',
      
      },
   
    ],
    
  },
  
  {
    name: 'Authentication',
    Icon: KeyOutlinedIcon,
    items: [
      {
        name: 'Login',
        link: '/login',
      },
      {
        name: 'Register',
        link: '/register',
      
      },
      {
        name: 'Forget Password',
        link: '/forgetpassword',
      },
      {
        name: 'OTP',
        link: '/otp',
      },
      {
        name: 'Lock Screen',
        link: '/lockscreen',
      },
      
   
    ],
    
  },
  {
    name: 'Error Pages',
    Icon: WarningAmberOutlinedIcon,
    items: [
      {
        name: '404 Error',
        link: '/404error ',
      },
      {
        name: '500 Error',
        link: '/500error',
      
      },
   
    ],
    
  },
  {
    name: 'Subscriptions',
    Icon: SwipeLeftOutlinedIcon,
    items: [
      {
        name: 'Subscriptions(Admin)',
        link: '/subscriptions(admin)',
      },
      {
        name: 'Subscriptions(Company)',
        link: '/subscriptions(company)',
      
      },
      {
        name: ' Subscriptions Companies',
        link: '/subscriptioncompanies',
      },
     
    ],
    
  },
  {
    name: 'Pages',
    Icon: ViewColumnOutlinedIcon,
    items: [
      {
        name: 'Search',
        link: '/search',
      },
      {
        name: 'FAQ',
        link: '/faq',
      
      },
      {
        name: ' Terms',
        link: '/terms',
      },
      {
        name: ' Privacy Policy',
        link: '/privacy policy',
      },
      {
        name: ' Blank  Page',
        link: '/blanckpage',
      },
    ],
    
  },
  {
    name: 'Components',
    link: '/components',
    Icon: ExtensionOutlinedIcon,
  },

  
  {
    name: 'Forms',
    Icon: DynamicFormOutlinedIcon,
    items: [
      {
        name: 'Basic Inputs',
      },
      {
        name: 'Input Groups',
      
      },
      {
        name: 'Horizontal Form',
      },
      {
        name: 'Vertical',
      
      },
      {
        name: 'Form Mask',
      },
      {
        name: 'Form Validation',
      },
      
   
    ],
    
  },
  {
    name: 'Tables',
    Icon: TableChartOutlinedIcon,
    items: [
      {
        name: 'Basics Tables',
        link: '/basicstables',
      },
      {
        name: 'Data Table',
        link: '/datatable',
      
      },
   
    ],
    
  },
  {
    name: 'Documentation',
    link: '/documentation',
    Icon: DocumentScannerOutlinedIcon,
  },
  {
    name: 'Change Log',
    link: '/changelog',
    Icon: InfoOutlinedIcon,
  },
  

  
  

]

const AppMenu = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  )
}

const drawerWidth = 230
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor:"black",
    whiteSpace: 'nowrap',
    
    boxSizing: 'border-box',
      ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
      
    },
  }),
)

export default AppMenu