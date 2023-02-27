import React, { useEffect, useState } from 'react';
import { sideBarItems, fontAwesomeIcons } from '@services/utils/static.data';
import '@components/sidebar/Sidebar.scss';
import { useLocation, createSearchParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state.user);

  console.log('PROFILE', profile);

  const checkUrl = (name) => {
    return location.pathname.includes(name.toLowerCase());
  };

  useEffect(() => {
    setSidebar(sideBarItems);
  }, []);

  const navigateToPage = (name, url) => {
    if (name === 'Profile') {
      url = `${url}/${profile?.username}?${createSearchParams({ id: profile?._id, uil: profile?.uId })}`;
    }
    navigate(url);
  };

  return (
    <div className="app-side-menu">
      <div className="side-menu">
        <ul className="list-unstyled">
          {sidebar.map((data) => (
            <li key={data.index} onClick={() => navigateToPage(data.name, data.url)}>
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
