export const Login = () => {
  const [alertType] = useState('');

  // const handleSubmit = () => {};
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [keepLoggedIn] = useState('');
  return (
    <Container className="login-container">
      <div className="wrapper">
        {hasError && errorMessage && (
          <div className={`alerts ${alertType}`} role="alert">
            {errorMessage}
          </div>
        )}
        <form className="form-wrap">
          form here
          {/* <form className="form-wrap" onSubmit={handleSubmit}> */}
          {/* <div className="input-wrap"> */}
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
          <hr />
          <div className="forgot-password">Forgot Password?</div>
          {/* <div className="check-box-wrap">
              // <input
              //   id="checkbox"
              //   name="checkbox"
              //   type="checkbox"
              //   value={keepLoggedIn}
              //   className="checkBox"
              //   //  onChange={} handleChange={() => setKeepLoggedIn(!keepLoggedIn)}
              // />
              <div className="title">keep me logged in</div>
            </div> */}
          {/* </div> */}
          {/* <Button
            label={`${loading ? 'SIGNIN IN PROGRESS...' : 'SIGNIN'}`}
            className="send-btn"
            disabled={!username || !password}
          /> */}
        </form>
        <div className="remarks-wrap">
          <div className="remark-text">Not yet registered?</div>
          <Link to={'/auth/register'} style={{ textDecoration: 'none', color: '#722ed1' }}>
            Sign Up
          </Link>
        </div>
      </div>
    </Container>
  );
};

register: import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/input/Input';
import './Register.scss';
const hasError = false;
const errorMessage = 'This is ewrror message';
// const loading = false;
export const Register = () => {
  const [alertType] = useState('');
  // const [alertType, setAlertType] = useState('');

  const handleSubmit = () => {};
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="wrapper">
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
            id="email"
            name="email"
            type="text"
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
            labelText="Username"
            placeholder="Enter Password"
            handleChange={(event) => setPassword(event.target.value)}
          />
          <Input
            id="password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            labelText="Username"
            placeholder="Confirm Password"
            handleChange={(event) => setConfirmPassword(event.target.value)}
          />
          <hr />
        </div>
      </form>
      <div className="remarks-wrap">
        <div className="remark-text">Already registered?</div>
        <Link to={'/auth/login'} style={{ textDecoration: 'none', color: '#722ed1' }}>
          Login
        </Link>
      </div>
    </div>
  );
};
