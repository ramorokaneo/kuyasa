import React from 'react';
import "../../src/App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faInfoCircle, faEnvelope, faSignInAlt } from '@fortawesome/free-solid-svg-icons';


library.add(faHome, faInfoCircle, faEnvelope, faSignInAlt);

const Header = () => {
  const buttonStyle = {
    background: 'black',
    color: 'white',
    borderRadius: '5px',
    padding: '10px',
    margin: '5px',
    textDecoration: 'none',
    display: 'flex', // Make the buttons flex containers
    alignItems: 'center', // Center the icon and text vertically
    width: '100px', // Adjust the width according to your preference
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/" style={buttonStyle}>
              <FontAwesomeIcon icon="home" style={{ marginRight: '5px' }} /> Home
            </a>
          </li>
          <li>
            <a href="/about" style={buttonStyle}>
              <FontAwesomeIcon icon="info-circle" style={{ marginRight: '5px' }} /> About
            </a>
          </li>
          <li>
            <a href="/contact" style={buttonStyle}>
              <FontAwesomeIcon icon="envelope" style={{ marginRight: '5px' }} /> Contact
            </a>
          </li>
          <li>
            <a href="/login" style={buttonStyle}>
              <FontAwesomeIcon icon="sign-in-alt" style={{ marginRight: '5px' }} /> Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



