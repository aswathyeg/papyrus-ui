import React from 'react';
import NavigationBar from './NavigationBar'
import { Switch, Route } from 'react-router-dom';

import Home from './Home'
import Dashboard from './Dashboard'
import { BrowserRouter as Router} from 'react-router-dom';
// const Home: React.FC = () => {
//   return (
//     <React.Fragment>
//     <NavigationBar />
//     <h1>Home</h1>
//     </React.Fragment>
//   );
// };


const Teams: React.FC = () => {
  return (
    <h1>Teams</h1>
  );
};

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
    path: '/teams',
    sidebarName: 'Teams',
    component: Teams
  },
];

export default Routes;