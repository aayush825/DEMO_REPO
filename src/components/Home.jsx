import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import banner from '../assets/banner.jpg'; // Dummy banner

const Home = () => {
  return (
    <Container fluid className="p-0">
      <img src={banner} alt="Coaching Banner" className="img-fluid w-100" />
      <Container className="text-center my-5">
        <h1>Welcome to Pathak Study Hub</h1>
        <p>Your gateway to academic success!</p>
        <Button variant="primary" href="/admission">Enroll Now</Button>
      </Container>
    </Container>
  );
};

export default Home;
