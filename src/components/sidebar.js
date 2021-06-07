import React from 'react';
import './sidebar.css';
import {
  sidebarHome,
  sidebarLibrary,
  bestOfYoutube,
  moreFromYoutube,
  sidebarSettings,
  compactSidebar,
} from '../data/sidebarData';
import SidebarList from './sidebarList';

const Sidebar = ({ show }) => {
  if (!show) {
    return (
      <div className='sideBar active'>
        <SidebarList show={show} list={compactSidebar} />
      </div>
    );
  }
  return (
    <div className='sideBar'>
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
