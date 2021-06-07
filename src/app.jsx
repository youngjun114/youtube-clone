/* eslint-disable */

import './app.css';
import React, { useState } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Videos from './components/videos';
import Category from './components/category';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className='app'>
      <Router>
        <Header show={showMenu} onToggle={handleShowMenu} />
        <div className='main'>
          <Sidebar show={showMenu} onToggle={handleShowMenu} />
          <Switch>
            <Route path='/' />
          </Switch>
          <Videos />
        </div>
      </Router>
    </div>
  );
}

export default App;
