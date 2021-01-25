import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Menubar from './Menubar'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route
                    exact
                    path='/'
                    render={(props) => <App />}
                />
            </Switch>
            <Switch>
           
                <Route
                    exact
                    path='/menubar'
                    render={(props) => <Menubar/>}
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
