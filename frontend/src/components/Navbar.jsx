import React from 'react';
import './Navbar.css' // Import the CSS for the navbar
import logo from "../components/logo.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/attendance">Attendance</a>
        <a href="/aboutus">About Us</a>
        <a href="/courses">Courses</a>
      </div>
    </div>
  );
};

export default Navbar;
