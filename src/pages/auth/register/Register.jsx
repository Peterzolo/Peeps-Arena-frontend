import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/input/Input';
import './Register.scss';

const hasError = false;
const errorMessage = 'Error message';
const loading = false;

export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
              id="email"
              name="email"
              type="text"
              value={email}
              labelText="Email"
              placeholder="Enter Email"
              style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
              handleChange={(event) => setEmail(event.target.value)}
            />
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              labelText="Username"
              placeholder="Enter Password"
              handleChange={(event) => setPassword(event.target.value)}
            />
            <Input
              id="password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              labelText="Username"
              placeholder="Confirm Password"
              handleChange={(event) => setConfirmPassword(event.target.value)}
            />

            <Button
              label={`${loading ? 'SIGNIN IN PROGRESS...' : 'SIGNIN'}`}
              className="send-btn"
              disabled={!username || !password}
            />
            <div className="remarks-wrap">
              <div className="remark-text">Already registered?</div>
              <Link to={'/auth/register'} style={{ textDecoration: 'none', color: '#722ed1' }}>
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};
