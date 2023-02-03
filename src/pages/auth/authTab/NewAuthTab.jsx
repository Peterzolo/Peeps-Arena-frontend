import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Box } from '../../../components/box/Box';
import { Button } from '../../../components/Button/Button';
import { FilledButton } from '../../../components/Button/FilledButton';

const NewAuthTab = () => {
  return (
    <Box>
      <Row className="row">
        <Col md={6} className="col">
          <Button className="button">Register</Button>{' '}
        </Col>
        <Col md={6} className="col">
          <FilledButton className="filled-button">Log In</FilledButton>
        </Col>
      </Row>
    </Box>
  );
};

export default NewAuthTab;
