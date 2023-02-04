import React, { useState } from 'react';
import { Input } from '../../../components/input/Input';
import './Login.scss';
const hasError = false;
const errorMessage = 'This is ewrror message';
export const Login = () => {
  const [alertType] = useState('');
  // const [alertType, setAlertType] = useState('');

  const handleSubmit = () => {};
  return (
    <div className="wrapper">
      <h3 className="login-heading">Login</h3>

      {hasError && errorMessage && (
        <div className={`alerts ${alertType}`} role="alert">
          {errorMessage}
        </div>
      )}
      <form className="form-wrap" onSubmit={handleSubmit}>
        <div className="input-wrap">
          <Input />
        </div>
      </form>
    </div>
  );
};
