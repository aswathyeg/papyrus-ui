import React from 'react';
import NavigationBar from './NavigationBar'
import { Switch, Route } from 'react-router-dom';


const Home: React.FC = () => {
  return (
    <React.Fragment>
    <NavigationBar />
    <h1>Home</h1>
    </React.Fragment>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <Switch>
        {Routes.map((route: any) => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </div>
  );
};

const Teams: React.FC = () => {
  return (
    <h1>Teams</h1>
  );
};

const Routes = [
  {
    path: '/',
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