import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      {/* <a className="navbar-brand" href="#">
        Navbar
      </a> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse text-uppercase" id="navigation">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <span
          id="slide-line"
          style={{ width: '85.4297px', left: '507.188px' }}></span>
      </div>
    </nav>
  );
}
