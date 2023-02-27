import React, { useEffect, useState } from 'react';
import { sideBarItems, fontAwesomeIcons } from '@services/utils/static.data';
import '@components/sidebar/Sidebar.scss';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState([]);
  const location = useLocation();

  const checkUrl = (name) => {
    return location.pathname.includes(name.toLowerCase());
  };

  useEffect(() => {
    setSidebar(sideBarItems);
  }, []);

  const navigateToPage = (name, url) => {};

  return (
    <div className="app-side-menu">
      <div className="side-menu">
        <ul className="list-unstyled">
          {sidebar.map((data) => (
            <li key={data.index} onClick={() => navigateToPage()}>
              <div className={`sidebar-link ${checkUrl(data.name) ? 'active' : ''}`}>
                <div className="menu-icon"> {fontAwesomeIcons[data.iconName]}</div>
                <div className="menu-link">
                  <span>{`${data.name}`}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
