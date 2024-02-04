import React from 'react';
import { NavLink } from 'react-router-dom';
import './ComponentCSS/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mb-3">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">Krishi Rakshak</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/marketplace" activeClassName="active" className="nav-link">Marketplace</NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink to="/help" activeClassName="active" className="nav-link">Chat App</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
