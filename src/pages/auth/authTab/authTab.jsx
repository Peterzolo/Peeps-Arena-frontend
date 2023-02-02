import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Box } from '../../../components/box/Box';
import { Button } from '../../../components/Button/Button';
import { FilledButton } from '../../../components/Button/FilledButton';
import Card from '../../../components/card/Card';

// import { Button } from '../../../components/Button/Button';
// import Card from '../../../components/card/Card';
// import { H1 } from '../../../components/typography';

const authTab = () => {
  return (
    <Container
      style={{
        display: 'flex',
        width: '700px',
        height: '500px',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '100px'
      }}
    >
      <Box>
        <Box>fdjdjdfjdf</Box>
        <Card style={{ width: '700px', height: '400px' }}>
          <Row>
            <Col>
              <Button>Sign Up</Button>
            </Col>
            <Col>
              <FilledButton>Sign In</FilledButton>
            </Col>
          </Row>
          <Row></Row>
          <Row></Row>
        </Card>
      </Box>
    </Container>
  );
};

export default authTab;
