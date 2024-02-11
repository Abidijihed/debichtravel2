import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css'; // Create a separate CSS file for styling if needed

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#ff8000', color: 'white', padding: '20px 0' }}>
      <Row>
        <Col md={4} className="text-center">
          <FaPhone size={24} style={{ marginRight: '10px' }} />
          <span>Phone: +216 24 726 596</span>
        </Col>
        <Col md={4} className="text-center">
          <FaPhone size={24} style={{ marginRight: '10px' }} />
          <span>Phone: +216 92 848 958</span>
        </Col>
        <Col md={4} className="text-center">
          <FaEnvelope size={24} style={{ marginRight: '10px' }} />
          <span>Email: info@nojateam.com</span>
        </Col>
      </Row>
      <Row className="text-center mt-3">
        <Col>
          <p>&copy; 2024 Noja Team. All rights reserved. Powered by Noja Team</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
