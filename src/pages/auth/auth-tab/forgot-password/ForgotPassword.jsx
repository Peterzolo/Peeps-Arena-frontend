import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/Button/Button';
import { Input } from '../../../../components/input/Input';
import { Card } from '../../../../components/card/Card';

import './ForgotPassword.scss';

const hasError = false;
const errorMessage = 'Error message';
const loading = true;

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container className="forgot-password-container">
      <Card className="card-wrap">
        <div className="title">Forgot Password</div>
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
              type="text"
              value={email}
              labelText="email"
              placeholder="Enter Email"
              handleChange={(event) => setEmail(event.target.value)}
              className="input"
            />

            <Button
              label={`${loading ? 'REQUEST IN PROGRESS... wait' : 'SEND'}`}
              className="send-btn"
              disabled={!email}
            />
          </form>
        </div>
        <div className="remarks-wrap">
          <div className="remark-text">Back to</div>
          <Link to={'/'} style={{ textDecoration: 'none', color: '#722ed1' }}>
            Log In
          </Link>
        </div>
      </Card>
    </Container>
  );
};
