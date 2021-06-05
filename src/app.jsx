/* eslint-disable */

import './app.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Videos from './components/videos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' />
        </Switch>
        <Sidebar />
        <Videos />
      </Router>
    </>
  );
}

export default App;
