import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import '../auth-tab/AuthTab.scss';

const AuthTam = () => {
  const [type, setType] = useState('Sign In');
  return (
    <Container className="main-wrapper">
      <Row className="row">
        <Col className="row" md={12}>
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className={`tab ${type === 'Sign In' ? 'active' : ''}`} onClick={() => setType('Sign In')}>
                <button className="login-btn">Sign In</button>
              </li>
              <li className={`tab ${type === 'Sign Up' ? 'active' : ''}`} onClick={() => setType('Sign Up')}>
                <button className="register-btn">Sign Up</button>
              </li>
            </ul>
            <div className="form-wrap">
              {type === 'Sign In' && <div className="tab-item">LOGIN</div>}
              {type === 'Sign Up' && <div className="tab-item">REGISTER</div>}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthTam;
