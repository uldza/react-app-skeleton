import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './components/application';
import HomeView from './components/home_view';
import AboutView from './components/about_view';

var routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeView}/>
        <Route path="/about" component={AboutView}/>
      </Route>
    </Router>
);

export default routes;
