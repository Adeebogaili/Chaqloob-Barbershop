import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './about.css';

const About = () => {
  return (
    <div className='about'>
      <Container>
        <Row>
          <Col sm={{ size: 6, offset: 3 }} className='d-flex flex-column justify-content-center align-items-center'>
            <h4>About</h4>
            <p>
              Here at Chaqlub Barber Shop in Al-Ameen 2, Baghdad, our goal is to
              provide our customers with the highest quality of hair care
              combined with an authentic barber shop experience they can count
              on every single time. We strike a unique balance between
              traditional barbering and modern haircutting techniques in the
              heart of Baghdad.
            </p>
            <p>
              You will only find licensed BARBERS in our shop. They all learned
              how to cut MEN'S hair from day one, have many years of experience,
              are highly skilled and very passionate about their work.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
