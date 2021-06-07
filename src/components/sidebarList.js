import React from 'react';
import './sidebarList.css';
import { Link } from 'react-router-dom';

function SidebarList({ list, label, show }) {
  const isLabel = () => {
    if (label) {
      return <h3>{label}</h3>;
    }
  };

  return (
    <ul className={show ? 'sideBarContainer' : 'sideBarContainer active'}>
      {isLabel()}
      {list.map((item, index) => {
        return (
          <li key={index} className={show ? 'sidebarRow' : 'sidebarRow active'}>
            <Link
              to={item.path}
              className={show ? 'sidebarButton' : 'sidebarButton active'}
            >
              {item.icon}
            </Link>
            <span className={show ? 'sidebarTitle' : 'sidebarTitle active'}>
              {item.title}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default SidebarList;
