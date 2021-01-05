import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Routes from './Routes';
import { BrowserRouter as Router} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';

const Menubar: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <Switch>
        {Routes.map((route: any) => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </div>
  );
}

export default Menubar;