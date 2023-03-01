import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '@components/header/Header.scss';
import { Avatar } from '../avatar/Avatar';
import { FaCaretDown, FaCaretUp, FaRegBell, FaRegEnvelope } from 'react-icons/fa';
import { Utils } from 'src/services/utils/utilsService';
import { useDetectOutsideClick } from 'src/hooks/useDetectOutsideClick';

const logo = 'LOGO';
const messageCount = 10;

const Header = () => {
  const [environment, setEnvironment] = useState('');
  const messageRef = useRef();
  const [isMessageActive, setIsMessageActive] = useDetectOutsideClick(messageRef, false);
  const navigate = useNavigate();

  const backgrounColor = `${
    environment === 'DEV' || environment === 'LOCAL' ? '#50b5ff' : environment === 'STG' ? '#e9710f' : ''
  }`;
  useEffect(() => {
    const env = Utils.appEnvironment();
    setEnvironment(env);
  }, []);
  return (
    <>
      <div className="header-nav-wrapper" data-testid="header-wrapper">
        <div className="header-navbar">
          <div className="header-image" data-testid="header-image" onClick={() => navigate('/app/social/streams')}>
            <img src={logo} className="img-fluid" alt="" />
            <div className="app-name">
              Peeps
              {environment && (
                <span className="environment" style={{ backgroundColor: `${backgrounColor}` }}>
                  {environment}
                </span>
              )}
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
                <FaRegBell className="header-list-icon" />
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
                <FaRegEnvelope className="header-list-icon" />
                {messageCount > 0 && <span className="bg-danger-dots dots" data-testid="messages-dots"></span>}
              </span>
              &nbsp;
            </li>

            {/* /////////// */}
            <li data-testid="settings-list-item" className="header-nav-item">
              <span className="header-list-name profile-image">
                <Avatar name="Peeps" bgColor="#0b54e6" textColor="#e9f3ed" size={40} avatarSrc="" />
              </span>
              <span className="header-list-name profile-name">
                {/* {profile?.username} */}
                {/* {!isSettingsActive ? ( */}
                <FaCaretDown className="header-list-icon caret" />
                {/* ) : ( */}
                <FaCaretUp className="header-list-icon caret" />
                {/* )} */}
              </span>{' '}
              {/* {isSettingsActive && ( */}
              {/* <ul className="dropdown-ul" ref={settingsRef}> */}
              <ul className="dropdown-ul">
                <li className="dropdown-li">
                  {/* <Dropdown */}
                  <div
                    height={300}
                    style={{ right: '150px', top: '40px' }}
                    // data={settings}
                    // notificationCount={0}
                    title="Settings"
                    // onLogout={onLogout}
                    // onNavigate={() => ProfileUtils.navigateToProfile(profile, navigate)}
                  />
                </li>
              </ul>
              {/* )} */}
              <ul className="dropdown-ul">
                <li className="dropdown-li"></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
