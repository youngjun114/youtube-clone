import React from 'react';
import styles from './sidebar.module.css';
import {
  sidebarHome,
  sidebarLibrary,
  bestOfYoutube,
  moreFromYoutube,
  sidebarSettings,
} from './sidebarData';
import SidebarList from './sidebarList.js';

const Sidebar = () => {
  return (
    <div className={styles.sideBar}>
      <SidebarList list={sidebarHome} />
      <SidebarList list={sidebarLibrary} />
      <SidebarList list={bestOfYoutube} label='BEST OF YOUTUBE' />
      <SidebarList list={moreFromYoutube} label='MORE FROM YOUTUBE' />
      <SidebarList list={sidebarSettings} />
    </div>
  );
};

export default Sidebar;
