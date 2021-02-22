import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
// import AddUser from './Usermanagement/UserActions/AddUser';
// import ViewUser from './Usermanagement/UserActions/ViewUser';
// //import ExpandableMenu from './ExpandableMenu';
// import TreeView from './TreeView';
//import { Switch } from '@material-ui/core';

// import Dashboard from './Dashboard';
// import Logout from './Logout';
// import Usermanagement from './Usermanagement';
// import Admin from './Admin';
// import Student from './Student';
// import Teacher from './Teacher';

ReactDOM.render(
      <BrowserRouter>
        <div>

              <App /> 
             <Login />   

             {/* <ExpandableMenu /> 
             <Switch>
             <Route path="/adduser" component={AddUser}/>
             <Route path="/viewuser" component={ViewUser}/>
             </Switch> */}
              {/* <TreeView />  */}

            {/* <AddUser /> */}
           {/* <ViewUser /> */}
        </div>
     </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
