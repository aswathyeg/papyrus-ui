import React from 'react';
import NavigationBar from './NavigationBar'
import { Switch, Route } from 'react-router-dom';

import Home from './Home'
import Dashboard from './Dashboard'
import Usermanagement from './Usermanagement'
import Admin from './Admin'
import Student from './Student'
import Teacher from './Teacher'
import Logout from './Logout'
import { BrowserRouter as Router} from 'react-router-dom';
const Routes = [
  {
    path: '/home',
    sidebarName: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/usermanagement',
    sidebarName: 'Usermanagement',
    component: Usermanagement
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