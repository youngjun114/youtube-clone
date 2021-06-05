import React, { useState } from 'react';
import styles from './sidebar.module.css';
import {
  sidebarHome,
  sidebarLibrary,
  bestOfYoutube,
  moreFromYoutube,
  sidebarSettings,
} from './sidebarData';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={styles.sideBar}>
      <ul className={styles.sideBarContainer}>
        {sidebarHome.map((item, index) => {
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
      <ul className={styles.sideBarContainer}>
        {sidebarLibrary.map((item, index) => {
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
      <ul className={styles.sideBarContainer}>
        <h3>BEST OF YOUTUBE YOUTUBE</h3>
        {bestOfYoutube.map((item, index) => {
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
      <ul className={styles.sideBarContainer}>
        <h3>MORE FROM YOUTUBE</h3>
        {moreFromYoutube.map((item, index) => {
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
      <ul className={styles.sideBarContainer}>
        {sidebarSettings.map((item, index) => {
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
    </div>
  );
};

export default Sidebar;
