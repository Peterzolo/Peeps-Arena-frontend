import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/input/Input';
import './Register.scss';

const hasError = false;
const errorMessage = 'Error message';
const loading = true;

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
              type="email"
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
              labelText="Password"
              placeholder="Enter Password"
              handleChange={(event) => setPassword(event.target.value)}
            />
            <Input
              id="password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              labelText="ConfirmPassword"
              placeholder="Confirm Password"
              handleChange={(event) => setConfirmPassword(event.target.value)}
            />

            <Button
              label={`${loading ? 'SIGNIN Up PROGRESS... wait' : 'REGISTER'}`}
              className="send-btn"
              disabled={!username || !password}
            />
          </form>
        </div>
      </div>
    </Container>
  );
};
