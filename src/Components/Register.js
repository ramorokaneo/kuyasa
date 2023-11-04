import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import backgroundImage from "./Image/pexels-ds-stories-8099473.jpg";
import "../Components/Register.css";

function Register() {
    const backgroundImageStyle = {
        backgroundImage: 'url(${backgroundImage})',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      };

      const navigate = useNavigate();

      const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        schoolName: '',
        Grade: '',
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
    
        navigate('/login');
      };

  return (
    <div>
    <Header />
    <main style={backgroundImageStyle}>
    <div className="registration-card">
    <h2>Register Form</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullNamename}
          onChange={handleInputChange}
          required
        />
      </div>

        <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="schoolName">School Name:</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
      <label htmlFor="grade">Grade:</label>
      <input
        type="text"
        id="grade"
        name="grade"
        value={formData.grade}
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

      <button className="btn btn-dark btn-rounded" type="submit">Register</button>
    </form>

    <p>Already have an account? <Link to="/">Login</Link></p>
  </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Register
