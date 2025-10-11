import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <div className="navbar">
        <button
          className="burger"
          aria-label="Open Menu"
          onClick={openMenu}
          style={{ display: isOpen ? "none" : undefined }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <button
          className="close"
          aria-label="Close Menu"
          onClick={closeMenu}
          style={{ display: isOpen ? "flex" : "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <Link to="/" className="logo">
          Dmitry Lean
        </Link>

        <nav className={`nav ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/works">Works</Link>
            </li>
            {/* <li><Link to="/service">Service</Link></li> */}
            <li>
              <Link to="/contact" className="btn-outline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      />
    </header>
  );
};

export default NavBar;
