import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-title">Math Magicians</h1>
      <div className="navbar-links">
        <NavLink to="/" className="links">Home</NavLink>
        <NavLink to="/Calculator" className="links">Calculator</NavLink>
        <NavLink to="/Quote" className="links">Quote</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
