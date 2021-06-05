/* eslint-disable */

import './app.css';
import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Videos from './components/videos';
import Category from './components/category';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <div className='app_page'>
          <Header />
          <Sidebar />
          <Switch>
            <Route path='/' />
          </Switch>
          <Category />
          <Videos />
        </div>
      </Router>
    </div>
  );
}

export default App;
