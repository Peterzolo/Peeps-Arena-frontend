import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/input/Input';
import './Register.scss';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alertType] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const avatarColor = Utils.avatarColor();
      const avatarImage = Utils.generateAvatar(username.charAt(0).toUpperCase(), avatarColor);
      const result = await authService.signUp({
        username,
        email,
        password,
        avatarColor,
        avatarImage
      });
      setLoggedIn(true);
      setStoredUsername(username);
      setAlertType('alert-success');
      // Utils.dispatchUser(result, pageReload, dispatch, setUser);
    } catch (error) {
      setLoading(false);
      setHasError(true);
      setAlertType('alert-error');
      setErrorMessage(error?.response?.data?.message);
    }
  };

  return (
    <Container className="login-container">
      <div className="sub-container">
        {hasError && errorMessage && (
          <div className={`alerts ${alertType}`} role="alert">
            {errorMessage}
          </div>
        )}

        <div className="form-container">
          <form action="" className="form-wrap" onSubmit={handleSubmit}>
            <Input
              id="username"
              name="username"
              type="text"
              value={username}
              labelText="Username"
              placeholder="Enter Username"
              style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
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
              style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
              handleChange={(event) => setPassword(event.target.value)}
            />
            <Input
              id="password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              labelText="ConfirmPassword"
              placeholder="Confirm Password"
              style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
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
