import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Landing from './Components/Landing';
import Register from './Components/Register';
import Home from './Components/Home';
import AiTutor from './Components/AiTutor';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ai" element={<AiTutor />} />    
        </Routes>
      </div>
    </Router>
  );
}

export default App;
