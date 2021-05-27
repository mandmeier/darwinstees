import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'; // HashRouter is for deploy
// import { BrowserRouter as Router, Route } from 'react-router-dom'; // BrowserRouter is for dev only
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import {Provider} from "react-redux"
import store from "./state/store"


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/404" component={NotFound}/>
      </div>
    </Router>
  </Provider>
    ,document.getElementById('root'));
    