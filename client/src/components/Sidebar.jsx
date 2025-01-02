import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';
import  logo from "../assets/logo.png" 
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} height="50" width="100" alt="Go for it hypnotherapy" />
      </div>
      <div className="menu-items">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/users">Users</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Sidebar;
