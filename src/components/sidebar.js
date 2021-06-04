import React from 'react';
import styles from './sidebar.module.css';
import SidebarItem from './sidebarItem';

import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

const Sidebar = () => {
  return (
    <div className={styles.sideBar}>
      <SidebarItem title='Home' Icon={HomeIcon} />
      <SidebarItem title='Explore' Icon={ExploreIcon} />
      <SidebarItem title='Subscriptions' Icon={SubscriptionsIcon} />
      <SidebarItem title='Originals' Icon={YouTubeIcon} />
      <SidebarItem title='Youtube Music' Icon={PlayCircleFilledIcon} />
    </div>

    // <div className={styles.sideBar}>
    //   <button className={styles.menuButton}>
    //     <HomeIcon style={{ backgroundColor: 'transparent' }} />
    //     <span className={styles.spanText}>Home</span>
    //   </button>
    //   <button className={styles.menuButton}>
    //     <ExploreIcon style={{ backgroundColor: 'transparent' }} />
    //     <span className={styles.spanText}>Explore</span>
    //   </button>
    //   <button className={styles.menuButton}>
    //     <SubscriptionsIcon style={{ backgroundColor: 'transparent' }} />
    //     <span className={styles.spanText}>Subscriptions</span>
    //   </button>
    //   <button className={styles.menuButton}>
    //     <YouTubeIcon style={{ backgroundColor: 'transparent' }} />
    //     <span className={styles.spanText}>Originals</span>
    //   </button>
    //   <button className={styles.menuButton}>
    //     <PlayCircleFilledIcon style={{ backgroundColor: 'transparent' }} />
    //     <span className={styles.spanText}>YouTube Music</span>
    //   </button>
    //   <button className={styles.menuButton}>
    //     <VideoLibraryIcon style={{ backgroundColor: 'transparent' }} />
    //     <span className={styles.spanText}>Library</span>
    //   </button>
    // </div>
  );
};

export default Sidebar;
