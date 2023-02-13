import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@components/Button/Button';
import { Input } from '@components/input/Input';
import { toast } from 'react-toastify';
import { authService } from '@services/APIs/auth/authService';
import { Card } from '@components/card/Card';
import '@pages/auth/login/Login.scss';
import { useLocalStorage } from 'src/hooks/useLocalStorage';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState('');
  const [user, setUser] = useState('');
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();
  const [setStoredUsername] = useLocalStorage('username', 'set');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await authService.logIn({
        username,
        password
      });

      // setLoggedIn(true);
      setStoredUsername(username);
      toast.success(result.data.message);

      setUser(result.data.user);
      // Utils.dispatchUser(result, pageReload, dispatch, setUser);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setHasError(true);
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    if (loading && !user) return;
    if (user) {
      navigate('/app/social/streams');
      setLoading(false);
    }
  }, [loading, user, navigate]);

  return (
    <Container className="login-container">
      <Card className="card-wrap">
        <div className="title">Login</div>
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
              id="password"
              name="password"
              type="password"
              value={password}
              labelText="Password"
              placeholder="Enter Password"
              style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
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
              <div className="sub-title">keep me logged in</div>
            </div>
            <Button
              label={`${loading ? 'SIGNIN IN PROGRESS... please wait' : 'SIGNIN'}`}
              className="send-btn"
              disabled={!username || !password}
            />
            <Link to="/forgot-password" style={{ textDecoration: 'none', marginTop: '10px' }}>
              <div className="forgot-password">Forgot Password?</div>
            </Link>
          </form>
          <hr />
          <div className="remarks-wrap">
            <div className="remark-text">Not yet registered</div> &nbsp; &nbsp; &nbsp;
            <Link to={'/register'} style={{ textDecoration: 'none', color: '#722ed1' }}>
              Sign Up Here
            </Link>
          </div>
        </div>
      </Card>
    </Container>
  );
};
