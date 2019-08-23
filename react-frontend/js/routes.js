import React, { Component } from 'react';
import App from './App'
let {Router, Route, Link, browserHistory} = window.ReactRouter;

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      {/*<Route path='app' component={App}/>*/}
    </Route>
  </Router>
);

