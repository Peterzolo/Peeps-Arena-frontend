import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../../../components/card/Card';

const Login = () => {
  return (
    <Container>
      <Row>
        <Col md={6}></Col>
      </Row>
      <Row>
        <Col>
          <Card md={6} style={{ width: '600px', height: '500px' }}>
            Input
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
