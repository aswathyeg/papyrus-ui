import React, { Fragment, useState } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import Routes from './Routes';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
//import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import SchoolIcon from '@material-ui/icons/School';
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  MenuList,
  MenuItem,
  ListItemText,
 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ListItemIcon } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 10,
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: 300,
    },
    fullList: {
      width: 'auto',
    },
    nested: {
      paddingLeft: theme.spacing(2),
    },
  }),
);

const NavigationBar: React.FC = (props: any): JSX.Element => {
  const [openmenu, setOpen] = useState(true);
  const history = useHistory();
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setOpen(!openmenu);
    console.log('hi');
  };
  const addNewUser=()=>{

    history.push('./adduser');

  }
  const viewNewUser=()=>{
    history.push('./viewuser');
  }
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  const activeRoute = (routeName: any) => {
    return props.location.pathname === routeName ? true : false;
  }
  
  return (
    
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Papyrus
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer classes={{ paper: classes.drawer }} open={!isOpen} onClose={toggleDrawer(false)}>
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <MenuList>
            {Routes.map((prop, key) => {
              
              return (
                <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                  <MenuItem selected={activeRoute(prop.path)} >
                    <ListItemIcon> {(key ===0?<div>< DashboardRoundedIcon color="primary"/></div>
                    
                    :(key ===1 ? 
                    <Fragment> <NavLink to={prop.path} style={{ textDecoration: 'none' }}key={key}>
                    < PeopleRoundedIcon color="primary"/> 
                     <List
      component="nav"
       aria-labelledby="nested-list-subheader"
     
      className={classes.root}
    >
      
       <ListItem button onClick={handleClick}>
       <ListItemText primary={prop.userSidebarName} />
       {openmenu ? <ExpandLess /> : <ExpandMore />}
       </ListItem>
       <Collapse in={openmenu} timeout="auto" unmountOnExit>
       <List component="div" disablePadding>
       <ListItem button className={classes.nested} >
       <List>
        
           <ListItemText  primary={prop.subsidebarName} onClick={addNewUser} />
           
</List>
         </ListItem>

         <ListItem button className={classes.nested}>
           <List>
                   
           <ListItemText primary="View Users" onClick={viewNewUser} />
           
           </List>
         </ListItem>
       </List>
     </Collapse>
   </List>
            </NavLink>
            </Fragment>
     :(key ===2?<AccountCircleRoundedIcon color="primary"/>:
     (key ===3?<SchoolIcon color="primary"/>:
     (key ===4?<LocalLibraryRoundedIcon color="primary"/>:
     <ExitToAppIcon color="primary"/>)))))}</ListItemIcon> 
     
                     <ListItemText primary={prop.sidebarName} /> 
                  </MenuItem>
                </NavLink>
                
              );
            })}
          </MenuList>
          
        </div>
      </Drawer>
    </div>
  );
};

export default withRouter(NavigationBar);