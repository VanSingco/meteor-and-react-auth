import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { withTracker } from 'meteor/react-meteor-data';

import Home from '../component/Home';
import Landing from '../component/Landing';
import Signup from '../component/Signup';
import Login from '../component/Login';


const AppRoute = (props) => (
    <BrowserRouter>
        <Switch>
            <ProtectedRoute currentUser={props.currentUser} exact path="/" component={Home} />
            <PublicRoute currentUser={props.currentUser} path="/login" component={Login} />
            <PublicRoute currentUser={props.currentUser} path="/signup" component={Signup} />
        </Switch>
    </BrowserRouter>
)

export default withTracker(() => {
    const currentUser = !!Meteor.userId()
    return  {currentUser}
})(AppRoute);

// Must be logged in for this route... Briefly shows '...' while loading account data rather than redirecting...
const ProtectedRoute = ({ component: Component, currentUser, ...rest }) => (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to={{ pathname: "/login" }} />;
      }}
    />
  );

  const PublicRoute = ({ component: Component, currentUser, ...rest }) => (
    <Route
      {...rest}
      render={props => {
        return !currentUser ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />;
      }}
    />
  );
