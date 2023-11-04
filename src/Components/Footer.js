import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook, faTwitter, faInstagram, faTiktok, faYoutube, faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const iconStyle = {
    color: 'black',
    fontSize: '24px',
    margin: '20px 20px', 
  };

  return (
    <footer>
      <div className="social-icons">
        <a href="#" target="_blank" style={iconStyle}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" target="_blank" style={iconStyle}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" target="_blank" style={iconStyle}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" target="_blank" style={iconStyle}>
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href="#" target="_blank" style={iconStyle}>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="#" target="_blank" style={iconStyle}>
          <FontAwesomeIcon icon={faMicrosoft} />
        </a>
      </div>
      <p>&copy; 2023 Kuyasa</p>
    </footer>
  );
}

export default Footer;
