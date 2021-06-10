import React from 'react';
import styles from './sidebar.module.css';
import {
  sidebarHome,
  sidebarLibrary,
  bestOfYoutube,
  moreFromYoutube,
  sidebarSettings,
  compactSidebar,
} from '../../data/sidebarData';
import SidebarList from '../sidebar_list/sidebar_list';

const Sidebar = ({ show }) => {
  if (!show) {
    return (
      <div className={styles.sidebar_active}>
        <SidebarList show={show} list={compactSidebar} />
      </div>
    );
  }
  return (
    <div className={styles.sidebar}>
      <SidebarList show={show} list={sidebarHome} />
      <SidebarList show={show} list={sidebarLibrary} />
      <SidebarList show={show} list={bestOfYoutube} label='BEST OF YOUTUBE' />
      <SidebarList
        show={show}
        list={moreFromYoutube}
        label='MORE FROM YOUTUBE'
      />
      <SidebarList show={show} list={sidebarSettings} />
    </div>
  );
};

export default Sidebar;
