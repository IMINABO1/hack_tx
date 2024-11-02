// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">E-Learning Arcade</h1>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Courses</li>
        <li>Leaderboard</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
}

export default Navbar;
