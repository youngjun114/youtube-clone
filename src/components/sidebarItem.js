import React from 'react';
import styles from '../components/sidebarItem.module.css';

function SidebarItem({ title, Icon }) {
  return (
    <div className={styles.sidebarRow}>
      <button className={styles.sidebarButton}>
        <Icon style={{ backgroundColor: 'transparent' }} />
      </button>
      <span className={styles.sidebarTitle}>{title}</span>
    </div>
  );
}

export default SidebarItem;
