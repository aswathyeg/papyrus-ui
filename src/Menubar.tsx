

import React from 'react';
import Home from './Home';
import Dashboard from './Dashboard';
import Usermanagement from './Usermanagement';
import Admin from './Admin';
import Student from './Student';
import Teacher from './Teacher';
import Logout from './Logout';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import { BrowserRouter as Router, Route } from 'react-router-dom';




const Menubar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event:any) => {
   
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
    
  return (
      <div>
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
    Open Menu
  </Button>
  <Menu
    id="simple-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
  >
    <MenuItem onClick={handleClose}>Home</MenuItem>
    
    <MenuItem onClick={handleClose}>Dashboard</MenuItem>
    <MenuItem onClick={handleClose}>Usermanagement</MenuItem>
    <MenuItem onClick={handleClose}>Admin</MenuItem>
    <MenuItem onClick={handleClose}>Student</MenuItem>
    <MenuItem onClick={handleClose}>Teacher</MenuItem>
    <MenuItem onClick={handleClose}>Logout</MenuItem>
  </Menu>
  </div>
  );
}






export default Menubar;