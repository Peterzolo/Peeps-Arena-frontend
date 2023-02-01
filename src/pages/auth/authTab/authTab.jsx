import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
// import backgroundImage from '../../../assets/images/background1.jpg';
import Login from '../login/Login';
import './authTab.scss';

const authTab = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [type, setType] = useState('Sign In');
  return (
    <Row>
      <Col md={12}>
        {/* {keepLoggedIn ? (
        <PageLoader />
      ) : ( */}
        {/* <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}> */}
        <div className="container-wrapper">
          <div className="environment"></div>
          <div className="container-wrapper-auth">
            <div className="tabs">
              <div className="tabs-auth">
                <ul className="tab-group">
                  <li className={`tab ${type === 'Sign In' ? 'active' : ''}`} onClick={() => setType('Sign In')}>
                    <button className="login">Sign In</button>
                  </li>
                  <li className={`tab ${type === 'Sign Up' ? 'active' : ''}`} onClick={() => setType('Sign Up')}>
                    <button className="signup">Sign Up</button>
                  </li>
                </ul>
                {type === 'Sign In' && (
                  <div className="tab-item">
                    <Login />
                  </div>
                )}
                {type === 'Sign Up' && <div className="tab-item">{/* <Register /> */}</div>}
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
      </Col>
    </Row>
  );
};

export default authTab;
