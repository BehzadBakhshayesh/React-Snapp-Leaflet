import React from 'react';
import { Route, Switch } from 'react-router';
import Preloading from './Pages/Preloading/Preloading'
import AddWebAppToPhone from './Pages/AddWebAppToPhone/AddWebAppToPhone'
import Welcome from './Pages/Welcome/Welcome'
import Login from './Pages/Login/Login'
import Verify from './Pages/Verify/Verify'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <>
      <div className='App'>
        <Switch>
          <Route exact path='/'> <Preloading redirectTo='/addwebapptophone' /> </Route>
          <Route exact path='/addwebapptophone' component={AddWebAppToPhone} />
          <Route exact path='/welcome' component={Welcome} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/verify' component={Verify} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </div>
    </>
  );
};

export default App;
