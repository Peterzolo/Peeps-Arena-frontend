import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/input/Input';
import { toast } from 'react-toastify';
import { authService } from '../../../services/APIs/auth/authService';
import './Login.scss';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertType, setAlertType] = useState('');
  const [loading, setLoading] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState('');
  const [user, setUser] = useState('');
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await authService.logIn({
        username,
        password
      });

      // setLoggedIn(true);
      // setStoredUsername(username);
      toast.success(result.data.message);
      setAlertType('alert-success');
      console.log('GOT HERE', result);
      setUser(result.data.user);
      // Utils.dispatchUser(result, pageReload, dispatch, setUser);
    } catch (error) {
      setLoading(false);
      setHasError(true);
      setAlertType('alert-error');
      setErrorMessage(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    if (loading && !user) return;
    if (user) {
      console.log('Navigate to login page');
      setLoading(false);
    }
  }, [loading, user]);

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
              handleChange={(event) => setUsername(event.target.value)}
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
              label={`${loading ? 'SIGNIN IN PROGRESS... wait' : 'SIGNIN'}`}
              className="send-btn"
              disabled={!username || !password}
            />
            <Link to="/forgot-password" style={{ textDecoration: 'none', marginTop: '10px' }}>
              <div className="forgot-password">Forgot Password?</div>
            </Link>
          </form>
        </div>
      </div>
    </Container>
  );
};
