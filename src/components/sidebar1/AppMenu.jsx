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
      },
      {
        name: ' Employee Dashboard',
      
      },
    ],

  },
  {
    name: 'Apps',
  
    Icon: IconBarChart,
    items: [
      {
        name: 'Chart',
      },
      {
        name: ' Calls',
      
      },
      {
        name: ' Calendar',
      
      },
      {
        name: ' Contacts',
      
      },
      {
        name: ' Email',
      
      },
      {
        name: ' File Manager',
      
      },
    ],
  },
  {
    name: 'Employees',
    
    Icon: IconPeople,
    items: [
      {
        name: 'All Employees',
      },
      {
        name: ' Holidays',
      
      },
      {
        name: 'Leaves(Admin)',
      
      },
      {
        name: 'Leaves(Employee)',
      
      },
      {
        name: ' Leave Settings',
      
      },
      {
        name: ' Attendance(Admin) ',
      
      },
      {
        name: ' Attendance(Employee) ',
      
      },
      {
        name: ' Departments ',
      
      },
      {
        name: ' Designations ',
      
      },
      {
        name: ' Timesheet ',
      
      },
      {
        name: ' Shift & Schedule ',
      
      },
      {
        name: ' Overtime ',
      
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
      },
      {
        name: 'Tasks',
      
      },
      {
        name: 'Tasks Board',
      
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
      },
      {
        name: 'Invoices',
      
      },
      {
        name: 'Payments ',
      
      },
      {
        name: 'Expenses ',
      
      },
      {
        name: 'Provident Fund ',
      
      },
      {
        name: 'Taxes ',
      
      },
    ],
  },
  {
    name: 'Accounting',
    Icon: IconLibraryBooks,
    items: [
      {
        name: ' Categories',
      },
      {
        name: 'Budgets',
      
      },
      {
        name: 'Budget Expenses ',
      
      },
      {
        name: 'Budget Revenues ',
      
      },
     
    ],
  },
  {
    name: 'Payroll',
    Icon: IconLibraryBooks,
    items: [
      {
        name: ' Employees Salary',
      },
      {
        name: 'Payslip',
      
      },
      {
        name: 'Payroll Items',
      
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
      },
      {
        name: 'Invoice Report',
      
      },
      {
        name: 'Project Report ',
      
      },
      {
        name: 'Payments Report ',
      
      },
      {
        name: 'Task Report ',
      
      },
      {
        name: 'User Report ',
      
      },
      {
        name: 'Employee Report ',
      
      },
      {
        name: 'Payslip Report ',
      
      },
      {
        name: 'Attendance Report ',
      
      },
      {
        name: 'Leave Report ',
      
      },
      {
        name: 'Daily Report ',
      
      },
     
    ],
  },

  {
    name: 'Performance',
    Icon: IconLibraryBooks,
    items: [
      {
        name: ' Performance Indicater',
      },
      {
        name: 'Performance Review',
      
      },
      {
        name: 'Performance Appraisal ',
      
      },
    ],
  },
  {
    name: 'Goals',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'Goal List',
      },
      {
        name: 'Goal Type',
      
      },
      
      
     
    ],
    
  },
  {
    name: 'Training',
    Icon: IconLibraryBooks,
    items: [
      {
        name: ' Training List',
      },
      {
        name: 'Trainers',
      
      },
      {
        name: 'Training Type',
      
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
      },
      {
        name: 'jobs Dashboard',
      
      },
      {
        name: 'Manage Jobs',
      },
      {
        name: ' Managen Resumes',
      
      },
      {
        name: 'Shortlist Candidates',
      },
      {
        name: 'Interview Questions ',
      
      },
      {
        name: 'Offer Approvals',
      },
      {
        name: 'Experience Level',
      
      },
      {
        name: 'Candidater List',
      },
      {
        name: 'Schedule timing',
      
      },
      {
        name: 'Aptitude Result',
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
      },
      {
        name: 'Register',
      
      },
      {
        name: 'Forget Password',
      },
      {
        name: 'OTP',
      
      },
      {
        name: 'Lock Screen',
      },
      
   
    ],
    
  },
  {
    name: 'Error Pages',
    Icon: IconLibraryBooks,
    items: [
      {
        name: '404 Error',
      },
      {
        name: '500 Error',
      
      },
   
    ],
    
  },
  {
    name: 'Subscriptions',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'Subscriptions(Admin)',
      },
      {
        name: 'Subscriptions(Company)',
      
      },
      {
        name: ' Subscriptions Companies',
      },
     
    ],
    
  },
  {
    name: 'Pages',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'Search',
      },
      {
        name: 'FAQ',
      
      },
      {
        name: ' Terms',
      },
      {
        name: ' Privacy Policy',
      },
      {
        name: ' Blank  Page',
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
      },
      {
        name: 'Data Table',
      
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