import React from 'react';
import Home from './Home';
import Menubar from './Menubar';
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const Login = () => {
  return (
    <Router>
      <Route exact path="/" component={LoginForm} />
      <Route path="/menubar" component={Menubar} />

    </Router>
  );
}
export default Login;
