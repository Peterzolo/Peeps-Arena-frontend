import React from 'react';

import '@pages/social/Social.scss';
import { Outlet } from 'react-router-dom';
import Header from '@components/header/Header';
import Sidebar from 'src/components/sidebar/Sidebar';

const Social = () => {
  return (
    <>
      <div className="header">
        <Header />{' '}
      </div>
      <div className="dashboard">
        <div className="dashboard-sidebar">
          <div className="side-bar">
            <Sidebar />{' '}
          </div>
        </div>
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Social;
