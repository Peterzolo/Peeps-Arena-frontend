import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Box } from '../../../components/box/Box';
import NewAuthTab from './NewAuthTab';

import '../authTab/styles.scss';

const BlankSlate = () => {
  return (
    <Container className="main-wrap">
      <Row className="row">
        <Col md={2} className="col"></Col>
        <Col md={8} className="col">
          <Box className="new-auth">
            <NewAuthTab />{' '}
          </Box>
        </Col>
        <Col md={2} className="col"></Col>
      </Row>
    </Container>
  );
};

export default BlankSlate;
