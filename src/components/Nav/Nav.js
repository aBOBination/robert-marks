import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      {/* <a class="navbar-brand" href="#">
        Navbar
      </a> */}
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Projects
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Resume
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
