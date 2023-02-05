import { Container } from 'react-bootstrap';

export const Login = () => {
  return (
    <Container className="login-container">
      <div className="sub-container">
        {hasError && errorMessage && (
          <div className={`alerts ${alertType}`} role="alert">
            {errorMessage}
          </div>
        )}

        <div className="form-container">
          <form action="" className="wrap"></form>
        </div>
      </div>
    </Container>
  );
};
