import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({ isAuth, component: Component, ...rest}) => (
  <Route {...rest} component={(props) => (
    isAuth ? (
      <div>
      <Component {...props} />
      </div>
    ) : (
      <Redirect to='/' />
    )

  )} />

);

const mapStatetoProps = (state) => ({
  isAuth: !!state.auth.uid
});

export default connect(mapStatetoProps)(PrivateRoute)
