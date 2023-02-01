import React from 'react';
import Card from '../../../components/card/Card';
import Input from '../../../components/input/Input';

const header = 'Log In To Post';

const Login = () => {
  return (
    <div className="login-wrapper">
      <Card
        cardHeader={header}
        input={
          <div className="input-class">
            <Input placeholder={'Username'} name="username" />
            <Input placeholder={'Password'} name="password" />
          </div>
        }
      />
    </div>
  );
};

export default Login;
