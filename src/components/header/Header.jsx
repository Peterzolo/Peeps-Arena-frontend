import React from 'react';

const Header = () => {
  return (
    <>
      {/* {!profile ? (
        <HeaderSkeleton />
      ) : ( */}
        <div className="header-nav-wrapper" data-testid="header-wrapper">
          {/* {isMessageActive && ( */}
            // <div ref={messageRef}>
            //   <MessageSidebar
            //     profile={profile}
            //     messageCount={messageCount}
            //     messageNotifications={messageNotifications}
            //     openChatPage={openChatPage}
            //   />
            // </div>
          // )}
          // {notificationDialogContent?.senderName && (
            // ///////////////////////////////////////////////////////////////
            // <NotificationPreview
            //   title="Your post"
            //   post={notificationDialogContent?.post}
            //   imgUrl={notificationDialogContent?.imgUrl}
            //   comment={notificationDialogContent?.comment}
            //   reaction={notificationDialogContent?.reaction}
            //   senderName={notificationDialogContent?.senderName}
            //   secondButtonText="Close"
            //   secondBtnHandler={() => {
            //     setNotificationDialogContent({
            //       post: '',
            //       imgUrl: '',
            //       comment: '',
            //       reaction: '',
            //       senderName: ''
            //     });
            //   }}
            // />

          // )}
          <div className="header-navbar">
            <div className="header-image" data-testid="header-image" onClick={() => navigate('/app/social/streams')}>
              <img src={logo} className="img-fluid" alt="" />
              <div className="app-name">
                Chatty
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
            <ul className="header-nav">
              <li
                data-testid="notification-list-item"
                className="header-nav-item active-item"
                onClick={() => {
                  setIsMessageActive(false);
                  setIsNotificationActive(true);
                  setIsSettingsActive(false);
                }}
              >
                <span className="header-list-name">
                  <FaRegBell className="header-list-icon" />
                  {notificationCount > 0 && (
                    <span className="bg-danger-dots dots" data-testid="notification-dots">
                      {notificationCount}
                    </span>
                  )}
                </span>
                {isNotificationActive && (
                  <ul className="dropdown-ul" ref={notificationRef}>
                    <li className="dropdown-li">
                      <Dropdown
                        height={300}
                        style={{ right: '250px', top: '20px' }}
                        data={notifications}
                        notificationCount={notificationCount}
                        title="Notifications"
                        onMarkAsRead={onMarkAsRead}
                        onDeleteNotification={onDeleteNotification}
                      />
                    </li>
                  </ul>
                )}
                &nbsp;
              </li>
              <li
                data-testid="message-list-item"
                className="header-nav-item active-item"
                onClick={() => {
                  setIsMessageActive(true);
                  setIsNotificationActive(false);
                  setIsSettingsActive(false);
                }}
              >
                <span className="header-list-name">
                  <FaRegEnvelope className="header-list-icon" />
                  {messageCount > 0 && <span className="bg-danger-dots dots" data-testid="messages-dots"></span>}
                </span>
                &nbsp;
              </li>
              <li
                data-testid="settings-list-item"
                className="header-nav-item"
                onClick={() => {
                  setIsSettingsActive(!isSettingsActive);
                  setIsMessageActive(false);
                  setIsNotificationActive(false);
                }}
              >
                <span className="header-list-name profile-image">
                  <Avatar
                    name={profile?.username}
                    bgColor={profile?.avatarColor}
                    textColor="#ffffff"
                    size={40}
                    avatarSrc={profile?.profilePicture}
                  />
                </span>
                <span className="header-list-name profile-name">
                  {profile?.username}
                  {!isSettingsActive ? (
                    <FaCaretDown className="header-list-icon caret" />
                  ) : (
                    <FaCaretUp className="header-list-icon caret" />
                  )}
                </span>
                {isSettingsActive && (
                  <ul className="dropdown-ul" ref={settingsRef}>
                    <li className="dropdown-li">
                      <Dropdown
                        height={300}
                        style={{ right: '150px', top: '40px' }}
                        data={settings}
                        notificationCount={0}
                        title="Settings"
                        onLogout={onLogout}
                        onNavigate={() => ProfileUtils.navigateToProfile(profile, navigate)}
                      />
                    </li>
                  </ul>
                )}
                <ul className="dropdown-ul">
                  <li className="dropdown-li"></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
