import React from 'react';
import Home from './Home';
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const Login = () => {
  return (
    <Router>
      <Route exact path="/" component={LoginForm} />
      <Route path="/home" component={Home} />

    </Router>
  );
}
export default Login;
