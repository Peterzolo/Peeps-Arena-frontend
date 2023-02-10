import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/Button/Button';
import { Input } from '../../../../components/input/Input';
import { Card } from '../../../../components/card/Card';
import { toast } from 'react-toastify';

import './ForgotPassword.scss';
import { authService } from '../../../../services/APIs/auth/authService';

export const ForgotPassword = () => {
  const [alertType, setAlertType] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await authService.ForgotPassword({
        email
      });

      // setLoggedIn(true);
      // setStoredUsername(username);
      toast.success(result.data.message);
      setAlertType('alert-success');
      console.log('GOT HERE', result);

      // Utils.dispatchUser(result, pageReload, dispatch, setUser);
    } catch (error) {
      setLoading(false);
      setHasError(true);
      setAlertType('alert-error');
      setErrorMessage(error?.response?.data?.message);
    }
  };
  return (
    <Container className="forgot-password-container">
      <Card className="card-wrap">
        <div className="title">Forgot Password</div>
        {hasError && errorMessage && (
          <div className={`alerts ${alertType}`} role="alert">
            {errorMessage}
          </div>
        )}
        <div className="form-container">
          <form action="" className="form-wrap" onSubmit={handleSubmit}>
            <Input
              id="email"
              name="email"
              type="text"
              value={email}
              labelText="email"
              placeholder="Enter Email"
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
