import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/input/Input';
import './Login.scss';

const hasError = false;
const errorMessage = 'Error message';
const loading = false;

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertType] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState('');
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
            <Input
              id="username"
              name="username"
              type="text"
              value={username}
              labelText="Username"
              placeholder="Enter Username"
              handleChange={(event) => setUsername(event.target.value)}
            />
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              labelText="Username"
              placeholder="Enter Username"
              handleChange={(event) => setPassword(event.target.value)}
            />

            <div className="check-box-wrap">
              <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                value={keepLoggedIn}
                className="checkBox"
                onChange={() => setKeepLoggedIn(!keepLoggedIn)}
              />
              <div className="title">keep me logged in</div>
            </div>
            <Button
              label={`${loading ? 'SIGNIN IN PROGRESS...' : 'SIGNIN'}`}
              className="send-btn"
              disabled={!username || !password}
            />
            <div className="forgot-password">Forgot Password?</div>
          </form>
          <div className="remarks-wrap">
            <div className="remark-text">Not yet registered?</div>
            <Link to={'/auth/register'} style={{ textDecoration: 'none', color: '#722ed1' }}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
