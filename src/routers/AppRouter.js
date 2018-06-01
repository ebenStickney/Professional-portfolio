import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AboutPage from "../components/About";
import NotFoundPage from "../components/NotFound";
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
<Router history={history}>
 <div>
  <Switch>
    <PublicRoute
    path="/"
    component={LoginPage}
    exact={true}
   />

   <PrivateRoute
    path="/about"
    component={AboutPage}
   />
   <Route

    component={NotFoundPage}
   />
  </Switch>
 </div>

</Router>

);




export default AppRouter;
