import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '../../../../components/Button/Button';
import { Input } from '../../../../components/input/Input';
import { Card } from '../../../../components/card/Card';

import './PasswordReset.scss';

const hasError = false;
const errorMessage = 'Error message';

export const PasswordReset = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

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
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Container className="forgot-password-container">
      <Card className="card-wrap">
        <div className="title">Password Reset</div>
        {hasError && errorMessage && (
          // <div className={`alerts ${alertType}`} role="alert">
          //   {errorMessage}
          // </div>
          <div className="alerts">Here is the error message gggfgfgfgfgfgfgfgfgfgfg</div>
        )}
        <div className="form-container">
          <form action="" className="form-wrap">
            <Input
              id="password"
              name="password"
              type="text"
              value={password}
              labelText="password"
              placeholder="Enter new password"
              handleChange={(event) => setPassword(event.target.value)}
              className="input"
            />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="text"
              value={confirmPassword}
              labelText="confirmPassword"
              placeholder="Confirm new password"
              handleChange={(event) => setConfirmPassword(event.target.value)}
              className="input"
            />

            <Button
              label={`${loading ? 'REQUEST IN PROGRESS... wait' : 'SEND'}`}
              className="send-btn"
              disabled={(!password, confirmPassword)}
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
