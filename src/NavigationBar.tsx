import React, { useState } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import Routes from './Routes';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import SchoolIcon from '@material-ui/icons/School';
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
      flexGrow: 1,
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
  }),
);

const NavigationBar: React.FC = (props: any) => {

  
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
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
      <Drawer classes={{ paper: classes.drawer }} open={isOpen} onClose={toggleDrawer(false)}>
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
                {/* <ListItemIcon> <HomeRoundedIcon /></ListItemIcon>   */}
                    <ListItemIcon> {key=== 0 ?<HomeRoundedIcon color="primary"/> :(key ===1?< DashboardRoundedIcon color="primary"/>:(key ===2 ?< PeopleRoundedIcon color="primary"/>:
                    (key ===3 ?<AccountCircleRoundedIcon color="primary"/>:(key ===4 ?<SchoolIcon color="primary"/>:(key ===5 ?<LocalLibraryRoundedIcon color="primary"/>:<ExitToAppIcon color="primary"/>)))))}</ListItemIcon> 
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