import React, { useEffect, useState } from 'react';
import { sideBarItems, fontAwesomeIcons } from '@services/utils/static.data';
import '@component/sidebar.Sidebar.scss';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState([]);

  useEffect(() => {
    setSidebar(sideBarItems);
  }, []);

  return (
    <div className="app-side-menu">
      <div className="side-menu">
        <ul className="list-unstyled">
          {sidebar.map((data) => (
            <li key={data.index}>
              <div className="sidebar-link"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
