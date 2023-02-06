import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/Button/Button';
import { Input } from '../../../../components/input/Input';
import { Card } from '../../../../components/card/Card';

import './ForgotPassword.scss';

const hasError = true;
const errorMessage = 'Error message';
const loading = false;

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container className="forgot-password-container">
      <Card className="card-wrap">
        <div className="sub-container">
          {hasError && errorMessage && (
            // <div className={`alerts ${alertType}`} role="alert">
            //   {errorMessage}
            // </div>
            <div className="alerts">Here is the error message gggfgfgfgfgfgfgfgfgfgfg</div>
          )}

          <div className="form-container">
            <form action="" className="form-wrap">
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                labelText="Email"
                placeholder="Enter Email"
                handleChange={(event) => setEmail(event.target.value)}
              />

              <Button label={`${loading ? 'REQUEST IN PROGRESS...' : 'SEND'}`} className="send-btn" disabled={!email} />
              <div className="forgot-password">Forgot Password?</div>
              <hr />
              <div className="remarks-wrap">
                <div className="remark-text">Back to login</div>
                <Link to={'/'} style={{ textDecoration: 'none', color: '#722ed1' }}>
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </Container>
  );
};
