import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../Components/Login.css';
import backgroundImage from "./Image/pexels-ds-stories-8099473.jpg";

function Login() {
    const backgroundImageStyle = {
        backgroundImage: 'url(${backgroundImage})',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }

      const navigate = useNavigate();
      const [formData, setFormData] = useState({
        usernameOrEmail: '',
        password: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/home');
      };
    

  return (
    <div>
    <Header />
    <main style={backgroundImageStyle}>
    <div className="login-card">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="usernameOrEmail">Username/Email:</label>
        <input
          type="text"
          id="usernameOrEmail"
          name="usernameOrEmail"
          value={formData.usernameOrEmail}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>

      <button className="btn btn-dark btn-rounded" type="submit">Login</button>
    </form>

    <p>Don't have an account? <Link to="/register">Register</Link></p>
  </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Login
