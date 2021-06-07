/* eslint-disable */

import './app.css';
import React, { useEffect, useState } from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import VideoList from './components/video_list/video_list';
import Category from './components/category/category';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

require('dotenv').config();
const api_key = process.env.API_KEY;

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [videos, setVideos] = useState([]);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&key=${api_key}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result.items);
        console.log(result);
      })
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div className='app'>
      <Router>
        <Header show={showMenu} onToggle={handleShowMenu} />
        <div className='main'>
          <Sidebar show={showMenu} onToggle={handleShowMenu} />
          <Switch>
            <Route path='/' />
          </Switch>
          <VideoList videos={videos} />
        </div>
      </Router>
    </div>
  );
}

export default App;
