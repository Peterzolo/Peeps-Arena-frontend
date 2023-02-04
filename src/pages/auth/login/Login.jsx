import React, { useState } from 'react';
import { Input } from '../../../components/input/Input';
import './Login.scss';
const hasError = false;
const errorMessage = 'This is ewrror message';
export const Login = () => {
  const [alertType] = useState('');
  // const [alertType, setAlertType] = useState('');

  const handleSubmit = () => {};
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="wrapper">
      {/* <h3 className="login-heading">Login</h3> */}

      {hasError && errorMessage && (
        <div className={`alerts ${alertType}`} role="alert">
          {errorMessage}
        </div>
      )}
      <form className="form-wrap" onSubmit={handleSubmit}>
        <div className="input-wrap">
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
            labelText="Username"
            placeholder="Enter Username"
            handleChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
