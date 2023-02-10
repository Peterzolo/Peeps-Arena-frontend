import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/input/Input';
import { authService } from '../../../services/APIs/auth/authService';
import { Utils } from '../../../services/utils/utilsService';
import { toast } from 'react-toastify';
import { Card } from '../../../components/card/Card';
import { Link } from 'react-router-dom';

import './Register.scss';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [user, setUser] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const avatarColor = Utils.avatarColor();
        const avatarImage = Utils.generateAvatarImage(username.charAt(0).toUpperCase(), avatarColor);
        const result = await authService.signUp({
          username,
          password,
          email,
          avatarColor,
          avatarImage
        });

        // setStoredUsername(username);
        toast.success(result.data.message);
        setUser(result.data.user);
        // Utils.dispatchUser(result, pageReload, dispatch, setUser);
        setPassword('');
        setEmail('');
        setUsername('');
        setConfirmPassword('');
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setHasError(true);
        toast.error(error?.response?.data?.message);
      }
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
    <Container className="register-container">
      <Card className="card-wrap">
        <div className="title">Register</div>

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
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              labelText="ConfirmPassword"
              placeholder="Confirm Password"
              style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
              handleChange={(event) => setConfirmPassword(event.target.value)}
            />

            <Button
              label={`${loading ? 'SIGNIN UP IN PROGRESS... please wait' : 'REGISTER'}`}
              className="send-btn"
              disabled={!username || !email || !password || !confirmPassword}
            />
          </form>
          <hr />
          <div className="remarks-wrap">
            <div className="remark-text">Already Registered</div> &nbsp; &nbsp; &nbsp;
            <Link to={'/login'} style={{ textDecoration: 'none', color: '#722ed1' }}>
              Log In
            </Link>
          </div>
        </div>
      </Card>
    </Container>
  );
};
