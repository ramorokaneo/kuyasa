import React, { useState } from 'react';
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

  const [messages, setMessages] = useState([
    { text: "AI Bot: Hi! How can I help you today?", isUser: false },
  ]);
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      setMessages([
        ...messages,
        { text: `User: ${userInput}`, isUser: true },
      ]);
      // Simulate AI response here, replace with actual chatbot logic
      setMessages([
        ...messages,
        { text: "AI Bot: I'm sorry, I don't have that information yet.", isUser: false },
      ]);
      setUserInput('');
    }
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
      <main style={{ padding: '20px' }}>
        <div className="chat-container">
          <div className="chat-history">
            {messages.map((message, index) => (
              <div
                key={index}
                className={message.isUser ? 'user-message' : 'bot-message'}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="user-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={handleUserInput}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AiTutor;



