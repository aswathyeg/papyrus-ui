import LoginForm from './LoginForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Menubar from './Menubar';
const Login = () => {

  
  return (
    <Router>
      
      <Route exact path="/" component={LoginForm} />
       <Route path="/menubar" component={Menubar} />   
         </Router>
  );
}
export default Login;
