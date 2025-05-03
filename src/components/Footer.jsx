import React from 'react';
import { Container } from 'react-bootstrap';
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center p-3">
      <Container>
        <p>Follow Us</p>
        <div>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} className="text-danger mx-2" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-warning mx-2" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} className="text-primary mx-2" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} className="text-info mx-2" />
          </a>
        </div>
        <p>© 2025 Pathak Study Hub Pvt. Ltd.</p>
      </Container>
    </footer>
  );
};

export default Footer;
