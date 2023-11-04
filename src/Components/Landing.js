import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../src/App.css';
import backgroundImage from './Image/pexels-ds-stories-8099473.jpg';

function Landing() {
  const backgroundImageStyle = {
    backgroundImage: 'url(${backgroundImage})',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',


  }
  return (
    <div>
      <Header />
      <main style={backgroundImageStyle}>
      </main>
      <Footer />
    </div>
  )
}

export default Landing
