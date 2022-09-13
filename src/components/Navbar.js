import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-title">Math Magicians</h1>
      <div className="navbar-links">
        <a href="/" className="links">Home</a>
        <a href="/Calculator" className="links">Calculator</a>
        <a href="/Quote" className="links">Quote</a>
      </div>
    </div>
  );
}

export default Navbar;
