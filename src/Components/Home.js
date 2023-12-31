import React from 'react';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChalkboard, faBook, faScroll, faQuestionCircle, faHome, faUser, faGift, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(faChalkboard, faBook, faScroll, faQuestionCircle, faHome, faUser, faGift, faSignOutAlt);

function Home() {
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

  const sideNavStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
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
      <div>
      <main>
        <nav className='side-nav' style={sideNavStyle}>
          <ul>
            <li>
              <a href="/ai" style={buttonStyle}>
                <FontAwesomeIcon icon="chalkboard" style={{ marginRight: '5px' }} /> AI Tutor
              </a>
            </li>
            <li>
              <a href="/lessons" style={buttonStyle}>
                <FontAwesomeIcon icon="book" style={{ marginRight: '5px' }} /> Lessons
              </a>
            </li>
            <li>
              <a href="/past-papers" style={buttonStyle}>
                <FontAwesomeIcon icon="scroll" style={{ marginRight: '5px' }} /> Past Papers
              </a>
            </li>
            <li>
              <a href="/help" style={buttonStyle}>
                <FontAwesomeIcon icon="question-circle" style={{ marginRight: '5px' }} /> Help
              </a>
            </li>
          </ul>
        </nav>
      </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
