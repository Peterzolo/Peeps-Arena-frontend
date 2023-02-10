import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Card } from '../../../components/card/Card';

import '../auth-tab/AuthTab.scss';
import { Login } from '../../../pages/auth/login/Login';
import { Register } from '../../../pages/auth/register/Register';

const AuthTab = () => {
  // eslint-disable-next-line no-unused-vars
  const [type, setType] = useState('Sign In');
  return (
    <Container className="main-wrapper">
      <div className="sub-container">
        <Row className="row">
          <Col className="row" ms={12}>
            <div className="tabs-auth">
              <div className="card-container">
                <Card className="card-wrap">
                  <ul className="tab-group">
                    <li className={`tab ${type === 'Sign In' ? 'active' : ''}`} onClick={() => setType('Sign In')}>
                      <button className="login-btn">Sign In</button>
                    </li>
                    <li className={`tab ${type === 'Sign Up' ? 'active' : ''}`} onClick={() => setType('Sign Up')}>
                      <button className="register-btn">Sign Up</button>
                    </li>
                  </ul>
                  {type === 'Sign In' && (
                    <div className="tab-item">
                      <Login />
                    </div>
                  )}
                  {type === 'Sign Up' && (
                    <div className="tab-item">
                      <Register />
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AuthTab;
