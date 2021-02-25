import React from 'react';
import './App.css';
//import Login from './Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import AddUser from './Usermanagement/User-actions/AddUser';
import Dashboard from './Dashboard';
import Logout from './Logout';
//import Usermanagement from './Usermanagement/Usermanagement';
import Admin from './Admin';
import Student from './Student';
import Teacher from './Teacher';
import AddUser from './Usermanagement/UserActions/AddUser';
import ViewUser from './Usermanagement/UserActions/ViewUser';
function App() {

  return (
    <BrowserRouter>
      <div className="App">



        <Switch>

          <Route path="/dashboard" component={Dashboard} />
          {/* <Route path="/usermanagement" component={Usermanagement}/> */}
          <Route path="/admin" component={Admin} />
          <Route path="/student" component={Student} />
          <Route path="/teacher" component={Teacher} />
          <Route path="/logout" component={Logout} />
          <Route path="/adduser" component={AddUser} />
          <Route path="/viewuser" component={ViewUser} />
        </Switch>

      </div>
    </BrowserRouter>

  );

}

export default App;
