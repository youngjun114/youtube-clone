import React from 'react';
import styles from './sidebarList.module.css';
import { Link } from 'react-router-dom';

function SidebarList({ list, label }) {
  const isLabel = () => {
    if (label) {
      return <h3>{label}</h3>;
    }
  };
  return (
    <ul className={styles.sideBarContainer}>
      {isLabel()}
      {list.map((item, index) => {
        return (
          <li key={index} className={styles.sidebarRow}>
            <Link to={item.path} className={styles.sidebarButton}>
              {item.icon}
            </Link>
            <span className={styles.sidebarTitle}>{item.title}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default SidebarList;
