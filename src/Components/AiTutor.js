import React from 'react';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChalkboard, faBook, faScroll, faQuestionCircle, faHome, faUser, faGift, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(faChalkboard, faBook, faScroll, faQuestionCircle, faHome, faUser, faGift, faSignOutAlt);


function AiTutor() {
    const buttonStyle = {
        background: 'black',
        color: 'white',
        borderRadius: '5px',
        padding: '10px',
        margin: '5px',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
      };
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/home" style={buttonStyle}>
                <FontAwesomeIcon icon="home" style={{ marginRight: '5px' }} /> Home
              </a>
            </li>
            <li>
              <a href="/profile" style={buttonStyle}>
                <FontAwesomeIcon icon="user" style={{ marginRight: '5px' }} /> Profile
              </a>
            </li>
            <li>
              <a href="/reward" style={buttonStyle}>
                <FontAwesomeIcon icon="gift" style={{ marginRight: '5px' }} /> Rewards
              </a>
            </li>
            <li>
  <Link to="/login" style={buttonStyle}>
    <FontAwesomeIcon icon="sign-out-alt" style={{ marginRight: '5px' }} /> Logout
  </Link>
</li>
          </ul>
        </nav>
      </header>
      <main>
      main
      </main>
      <Footer />
    </div>
  )
}

export default AiTutor
