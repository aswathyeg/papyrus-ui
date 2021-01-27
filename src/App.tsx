import React from 'react';

import './App.css';
import Login from './Login';
import {  Route } from 'react-router-dom';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
//import Hooks from './Hooks';

function App() {

  return (
    <div className="App">
      <Login />
  
    <Route exact path="/home" component={Home} />

    {/* <Route path="/dashboard" component={Dashboard} /> */}

 

    </div>

  );


}

export default App;
