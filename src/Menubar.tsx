import React from 'react';



import NavigationBar from './NavigationBar';


const Menubar: React.FC = (): JSX.Element => {
  
  return (
    <div>
      <NavigationBar /> 
      
      {/* <Switch>
        {Routes.map((route: any) => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch> */}
    </div>
  );
}

export default Menubar;