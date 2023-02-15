import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@components/header/Header.scss';
import Avatar from '../avatar/Avatar';

const logo = 'LOGO';
const messageCount = 10;

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header-nav-wrapper" data-testid="header-wrapper">
        <div className="header-navbar">
          <div className="header-image" data-testid="header-image" onClick={() => navigate('/app/social/streams')}>
            <img src={logo} className="img-fluid" alt="" />
            <div className="app-name">
              Chatty
              {/* {environment && (
                <span className="environment" style={{ backgroundColor: `${backgrounColor}` }}>
                  {environment}
                </span> */}
              {/* )} */}
            </div>
          </div>
          <div className="header-menu-toggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* //////////// */}
          <ul className="header-nav">
            <li data-testid="notification-list-item" className="header-nav-item active-item">
              <span className="header-list-name">
                {/* <FaRegBell className="header-list-icon" /> */}
                {/* {notificationCount > 0 && ( */}
                <span className="bg-danger-dots dots" data-testid="notification-dots">
                  {/* {notificationCount} */}
                </span>
                {/* )} */}
              </span>
              {/* {isNotificationActive && ( */}
              {/* <ul className="dropdown-ul" ref={notificationRef}> */}
              <ul className="dropdown-ul">
                <li className="dropdown-li">
                  {/* <Dropdown */}
                  <div
                    // tobe changed
                    height={300}
                    style={{ right: '250px', top: '20px' }}
                    // data={notifications}
                    // notificationCount={notificationCount}
                    title="Notifications"
                    // onMarkAsRead={onMarkAsRead}
                    // onDeleteNotification={onDeleteNotification}
                  />
                </li>
              </ul>
              {/* )} */}
              &nbsp;
            </li>

            {/* ////////////// */}
            <li data-testid="message-list-item" className="header-nav-item active-item">
              {' '}
              <span className="header-list-name">
                {/* <FaRegEnvelope className="header-list-icon" /> */}
                {messageCount > 0 && <span className="bg-danger-dots dots" data-testid="messages-dots"></span>}
              </span>
              &nbsp;
            </li>

            {/* /////////// */}
            <li data-testid="settings-list-item" className="header-nav-item">
              <span className="header-list-name profile-image">
                <Avatar
                // name={profile?.username}
                // bgColor={profile?.avatarColor}
                // textColor="#ffffff"
                // size={40}
                // avatarSrc={profile?.profilePicture}
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
