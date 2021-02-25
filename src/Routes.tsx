


import Dashboard from './Dashboard'

import Admin from './Admin'
import Student from './Student'
import Teacher from './Teacher'
import Logout from './Logout'
import AddUser from './Usermanagement/UserActions/AddUser'
import Usermanagement from './Usermanagement/Usermanagement'

const Routes = [
  

    {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/usermanagement',
    userSidebarName: 'User Management',
    component: Usermanagement,
    
      },
  // {
  //   path: '/adduser',
  //   subsidebarName: 'Add New User',
  //   component: AddUser
  // },
  
  // {
  //   path: '/viewuser',
  //   //submenusidebarName: 'View Users',
  //   component: ViewUser
  // },
  {
    path: '/admin',
    sidebarName: 'Admin',
    component: Admin
  },
  {
    path: '/student',
    sidebarName: 'Student',
    component: Student
  },
  {
    path: '/teacher',
    sidebarName: 'Teacher',
    component: Teacher
  },
  {
    path: '/logout',
    sidebarName: 'Logout',
    component: Logout
  },
];

export default Routes;