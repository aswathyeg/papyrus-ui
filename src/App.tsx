import React from 'react';

import './App.css';
import Login from './Login';
//import {  Route } from 'react-router-dom';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Hooks from './Hooks';
import Dashboard from './Dashboard';
import Logout from './Logout';
import Usermanagement from './Usermanagement';
import Admin from './Admin';
import Student from './Student';
import Teacher from './Teacher';
function App() {

  return (
    <BrowserRouter>
    <div className="App">

      <Login />
  
    <Route exact path="/home" component={Home} />

    <Switch>

<Route
    exact
    path='/dashboard'
    render={(props) =>
        <div>
            <Dashboard />
        </div>}
/>
</Switch>
<Switch>

<Route
    exact
    path='/usermanagement'
    render={(props) =>
        <div>
            <Usermanagement />
        </div>}
/>
</Switch>
<Switch>

<Route
    exact
    path='/admin'
    render={(props) =>
        <div>
            <Admin />
        </div>}
/>
</Switch>
<Switch>

<Route
    exact
    path='/student'
    render={(props) =>
        <div>
            <Student />
        </div>}
/>
</Switch>
<Switch>

<Route
    exact
    path='/teacher'
    render={(props) =>
        <div>
            <Teacher />
       </div>}
/>
</Switch>
<Switch>

<Route
    exact
    path='/logout'
    render={(props) =>
        <div>
            <Logout />
        </div>}
/>
</Switch>
</div>
</BrowserRouter>

    

  

  );


}

export default App;
