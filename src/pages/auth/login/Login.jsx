import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Button } from '../../../components/Button/Button';
import './Login.scss';

const hasError = false;
const errorMessage = 'Error message';
const loading = false;

export const Login = () => {
  const [alertType] = useState('');
  return (
    <Container className="login-container">
      <div className="sub-container">
        {hasError && errorMessage && (
          <div className={`alerts ${alertType}`} role="alert">
            {errorMessage}
          </div>
        )}

        <div className="form-container">
          <form action="" className="form-wrap">
            <Button
              label={`${loading ? 'SIGNIN IN PROGRESS...' : 'SIGNIN'}`}
              className="send-btn"
              // disabled={!username || !password}
            />
          </form>
        </div>
      </div>
    </Container>
  );
};
