

//import Home from './Home'
import Dashboard from './Dashboard'
//import Usermanagement from './Usermanagement/Usermanagement'
import Admin from './Admin'
import Student from './Student'
import Teacher from './Teacher'
import Logout from './Logout'
import AddUser from './Usermanagement/UserActions/AddUser'
import ViewUser from './Usermanagement/UserActions/ViewUser'



const Routes = [

  // {
  //   path: '/home',
  //   sidebarName: 'Home',
  //   component: Home
  // },
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/adduser',
    //sidebarName: 'User Management',
    component: AddUser
  },
  
  {
    path: '/viewuser',
    //sidebarName: 'ViewUser',
    component: ViewUser
  },
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