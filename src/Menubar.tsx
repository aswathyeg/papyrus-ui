

import React from 'react';
import Home from './Home';
import Dashboard from './Dashboard';
import Usermanagement from './Usermanagement';
import Admin from './Admin';
import Student from './Student';
import Teacher from './Teacher';
import Logout from './Logout';

import { BrowserRouter as Router, Route } from 'react-router-dom';
const Menubar = () => {
  return (
    <Router>
      <Route exact path="/menubar" component={Menubar} />
      <Route path="/home" component={Home} />

    </Router>
  );
}






export default Menubar;