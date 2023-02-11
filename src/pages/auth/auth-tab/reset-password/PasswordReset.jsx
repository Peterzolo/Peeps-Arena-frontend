import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '@components/Button/Button';
import { Input } from '@components/input/Input';
import { Card } from '@components/card/Card';
import { toast } from 'react-toastify';

import './PasswordReset.scss';
import { authService } from '@services/APIs/auth/authService';
export const PasswordReset = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      toast.error('Password unmathed');
    } else {
      try {
        const response = await authService.resetPassword(searchParams.get('token'), {
          password,
          confirmPassword
        });

        setPassword('');
        setConfirmPassword('');

        toast.success(response.data.message);
        setLoading(false);
        navigate('/login');
      } catch (error) {
        setHasError(true);
        toast.error(error?.response?.data?.message);
        setLoading(false);
      }
    }
  };

  return (
    <Container className="forgot-password-container">
      <Card className="card-wrap">
        <div className="title">Password Reset</div>
        <div className="form-container">
          <form action="" className="form-wrap" onSubmit={handleSubmit}>
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              labelText="password"
              placeholder="Enter new password"
              style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
              handleChange={(event) => setPassword(event.target.value)}
              className="input"
            />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              labelText="confirmPassword"
              placeholder="Confirm new password"
              style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
              handleChange={(event) => setConfirmPassword(event.target.value)}
              className="input"
            />

            <Button
              label={`${loading ? 'REQUEST IN PROGRESS... wait' : 'SEND'}`}
              className="send-btn"
              disabled={(!password, !confirmPassword)}
            />
          </form>
        </div>
        <div className="remarks-wrap">
          <div className="remark-text">Back to</div>
          <Link to={'/login'} style={{ textDecoration: 'none', color: '#722ed1' }}>
            Log In
          </Link>
        </div>
      </Card>
    </Container>
  );
};
