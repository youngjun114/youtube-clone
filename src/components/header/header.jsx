/* eslint-disable */
import React, { memo, useState } from 'react';
import styles from './header.module.css';
import logo from '../../logo.png';
import Search from '../search/search';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';

const Header = memo(({ onToggle, onSearch }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <button onClick={onToggle}>
          <MenuIcon style={{ color: 'white', fontSize: '24px' }} />
        </button>
        <img className={styles.header_logo} src={logo} alt='logo' />
      </div>
      <Search onSearch={onSearch} />
      <div className={styles.header_right}>
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
});

export default Header;
