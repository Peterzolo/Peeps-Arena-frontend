import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/Button/Button';
import { Input } from '../../../../components/input/Input';
import { Card } from '../../../../components/card/Card';
import { toast } from 'react-toastify';
import { authService } from '../../../../services/APIs/auth/authService';

import './ForgotPassword.scss';

export const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [hasError, setHasError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await authService.forgotPassword({
        email
      });

      toast.success(result.data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setHasError(true);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <Container className="forgot-password-container">
      <Card className="card-wrap">
        <div className="title">Forgot Password</div>

        <div className="form-container">
          <form action="" className="form-wrap" onSubmit={handleSubmit}>
            <Input
              id="email"
              name="email"
              type="text"
              value={email}
              labelText="email"
              placeholder="Enter Email"
              style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
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
