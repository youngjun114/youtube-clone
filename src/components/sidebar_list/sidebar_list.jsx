import React from 'react';
import styles from './sidebar_list.module.css';

function SidebarList({ list, label, show }) {
  const isLabel = () => {
    if (label) {
      return <h3>{label}</h3>;
    }
  };

  return (
    <ul
      className={
        show ? styles.sidebar_container : styles.sidebar_container_active
      }
    >
      {isLabel()}
      {list.map((item, index) => {
        return (
          <li
            key={index}
            className={show ? styles.sidebar_row : styles.sidebar_row_active}
          >
            <button
              className={
                show ? styles.sidebar_button : styles.sidebar_button_active
              }
            >
              {item.icon}
            </button>
            <span
              className={
                show ? styles.sidebar_title : styles.sidebar_title_active
              }
            >
              {item.title}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default SidebarList;
