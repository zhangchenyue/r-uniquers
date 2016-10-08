import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, /*hashHistory,*/ browserHistory, IndexRoute} from 'react-router'
import App from './components/App';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Party from './components/Party'
import OL from './components/OL'
import Vacation from './components/Vacation';
import About from './components/About';

import 'imports?jQuery=jquery!bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/index.css';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
      <Route path="/home" component={Home}/>
      <Route path="/party" component={Party}/>
      <Route path="/ol" component={OL}/>
      <Route path="/vacation" component={Vacation}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('root'));
