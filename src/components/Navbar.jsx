import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('users'); // optional: clear users too
    navigate('/', { replace: true });
    window.location.reload(); // force re-render to reset state
  };

  return (
    <nav className="navbar">
      <h2>Admin Dashboard</h2>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/form">Add User</Link>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;

