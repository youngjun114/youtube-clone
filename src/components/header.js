/* eslint-disable */
import React, { useState } from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import styles from './header.module.css';
import logo from '../logo.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Search from './search';
import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';

function Header() {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Link to='#'>
          <MenuIcon style={{ color: 'white' }} onClick={showMenu} />
        </Link>
        <img className={styles.headerLogo} src={logo} alt='logo' />
      </div>
      <Search />
      <div className={styles.headerRight}>
        <VideoCallIcon className={styles.headerRightIcon} />
        <AppsIcon className={styles.headerRightIcon} />
        <NotificationsIcon className={styles.headerRightIcon} />
        <AccountCircleIcon className={styles.headerRightIcon} />
      </div>
    </div>
  );
}

export default Header;
