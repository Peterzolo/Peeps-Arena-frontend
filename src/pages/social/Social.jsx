import React from 'react';

import '@pages/social/Social.scss';
import { Outlet } from 'react-router-dom';

const Social = () => {
  return (
    <>
      <div className="header">Header</div>
      <div className="dashboard">
        <div className="dashboard-sidebar">
          <div className="side-bar">SIDE BAR</div>
        </div>
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Social;
