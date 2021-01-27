import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard';
import Logout from './Logout';
import Usermanagement from './Usermanagement';
import Admin from './Admin';
import Student from './Student';
import Teacher from './Teacher';

ReactDOM.render(
    <BrowserRouter>
        <div>

            <App />
            {/* <Switch>
                <Route
                    exact
                    path='/'
                    render={(props) => <App />}
                />
            </Switch>  */}
            {/* <Switch>
           
                <Route
                    exact
                    path='/menubar'
                    render={(props) => <Menubar/>}
                />
            </Switch>  */}


            {/* <Switch>

                <Route
                    exact
                    path='/home'
                    render={(props) =>
                        <div>
                            <Home />
                        </div>}
                />
            </Switch> */}

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
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
