/* eslint-disable */

import './app.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Videos from './components/videos';

function App() {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <Videos></Videos>
    </>
  );
}

export default App;
