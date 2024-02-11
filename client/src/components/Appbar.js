// Appbar.js

import React from 'react';
import './Appbar.css';
import imagappbar from './appbar.png'
const Appbar = () => {
  return (
    <div className="appbar-container">
      <img
        className="background-image"
        src={imagappbar}
        alt="Background"
      />
      <div className="appbar-content">
        <div className="agency-name">Debich Travel</div>
        <div className="contact-info">
          <div className="email">Email: example@example.com</div>
        </div>
        <div className="phone">Phone:  (+216)  24 726 596</div>
<div><button>Se connecter</button></div>
      </div>
    </div>
  );
};

export default Appbar;
