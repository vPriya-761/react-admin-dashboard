import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';

import List from '@material-ui/core/List'

import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'

import AppMenuItem from './AppMenuItem'

const appMenuItems = [
  {
    name: 'Dashboard',
   
    Icon: IconDashboard,
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
   
    Icon: IconShoppingCart,
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
  
    Icon: IconBarChart,
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
    
    Icon: IconPeople,
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
    Icon: IconBarChart,
  },
 

  {
    name: 'Projects',
    Icon: IconLibraryBooks,
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
    Icon: IconBarChart,
  },
  {
    name: 'Tickets',
    link: '/tickets',
    Icon: IconBarChart,
  },
  {
    name: 'Sales',
    Icon: IconLibraryBooks,
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
    Icon: IconLibraryBooks,
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
    Icon: IconLibraryBooks,
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
    Icon: IconBarChart,
  },
  {
    name: 'Reports',
    Icon: IconLibraryBooks,
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
    Icon: IconLibraryBooks,
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
    Icon: IconLibraryBooks,
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
    Icon: IconLibraryBooks,
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
    Icon: IconBarChart,
  },
  {
    name: 'Resignation',
    link: '/resignation',
    Icon: IconBarChart,
  },
  {
    name: 'Termination',
    link: '/termination',
    Icon: IconBarChart,
  },
  {
    name: 'Assets',
    link: '/termination',
    Icon: IconBarChart,
  },
  {
    name: 'Jobs',
    Icon: IconLibraryBooks,
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
    Icon: IconBarChart,
  },
  {
    name: 'Activities',
    link: '/activities',
    Icon: IconBarChart,
  },
  {
    name: 'Users',
    link: '/users',
    Icon: IconBarChart,
  },
  {
    name: 'Settings',
    link: '/settings',
    Icon: IconBarChart,
  },
  {
    name: 'Profile',
    Icon: IconLibraryBooks,
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
    Icon: IconLibraryBooks,
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
    Icon: IconLibraryBooks,
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
    Icon: IconLibraryBooks,
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
    Icon: IconLibraryBooks,
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
    Icon: IconBarChart,
  },

  
  {
    name: 'Forms',
    Icon: IconLibraryBooks,
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
    Icon: IconLibraryBooks,
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
    Icon: IconBarChart,
  },
  {
    name: 'Change Log',
    link: '/changelog',
    Icon: IconBarChart,
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