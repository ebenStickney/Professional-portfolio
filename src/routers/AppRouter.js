import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AboutPage from "../components/About";
import ContactPage from "../components/ContactForm";
import Projects from "../components/Projects";
import NotFoundPage from "../components/NotFound";
import LoginPage from '../components/LoginPage';
import Header from "../components/Header";
import Welcome from '../components/Welcome';

export const history = createHistory();

const AppRouter = () => (
<Router history={history}>
 <div>
 <Header />
  <Switch>
    <Route
    path="/"
    component={Welcome}
    exact={true}
   />

   <Route
    path="/about"
    component={AboutPage}
   />
   <Route
    path="/projects"
    component={Projects}
   />
   <Route
    path="/contact"
    component={ContactPage}
   />
   <Route

    component={NotFoundPage}
   />
  </Switch>
 </div>

</Router>

);




export default AppRouter;
