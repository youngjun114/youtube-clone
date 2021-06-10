/* eslint-disable */

import './app.css';
import React, { useEffect, useState } from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import VideoList from './components/video_list/video_list';
import SearchList from './components/search_list/search_list';
import Category from './components/category/category';
import History from './components/history/history';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

function App({ youtube }) {
  const [showMenu, setShowMenu] = useState(true);
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('');

  const search = useCallback((query) => {
    youtube
      .search(query) //
      .then(setQuery(query))
      .then((videos) => setVideos(videos));
  }, []);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Router history={History}>
      <div className='app'>
        <Header show={showMenu} onToggle={handleShowMenu} onSearch={search} />
        <div className='main'>
          <Sidebar show={showMenu} />
          <Switch>
            <Route
              exact
              path='/'
              render={() => <VideoList videos={videos} />}
            />

            <Route path='/search' render={() => <SearchList />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
