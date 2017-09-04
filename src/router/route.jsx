import React from 'react';
import '../index.css';
import App from '../App';
import Home from '../views/home/home.jsx';
import Politics from '../views/politics/politics.jsx';

import { Router, route, hashHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router';

const routes = (
    <Router history={hashHistory}>
        <route path='/' component={App}>
            <IndexRedirect to="/home"></IndexRedirect>
            <route path="/home" component={Home}></route>
            <route path="/politics" component={Politics}></route>
            

        </route>
    </Router>
)

export default routes;