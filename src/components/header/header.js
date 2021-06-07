/* eslint-disable */
import React, { useState } from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './header.css';
import logo from '../../logo.png';
import Search from '../search/search';
import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';

function Header({ show, onToggle }) {
  console.log(show);
  return (
    <div className='header'>
      <div className='headerLeft'>
        <Link to='#'>
          <MenuIcon
            style={{ color: 'white', fontSize: '24px' }}
            onClick={onToggle}
          />
        </Link>
        <img className='headerLogo' src={logo} alt='logo' />
      </div>
      <Search />
      <div className='headerRight'>
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default Header;
