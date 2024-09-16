import React from "react";
import { useState } from "react";
import logoimg from "./assets/illustrations/logo.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <div className="header-logo" id="brand">
          <img src={logoimg} className="header-logo-img" alt="Logo" />
        </div>
        <nav>
          <ul className={`menu-list ${menuOpen ? "open" : ""}`}>
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className="nav-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Shop" className="nav-link">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/Blog" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li className="icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </li>
            <li className="icon">
              <FontAwesomeIcon icon={faHeart} />
            </li>
          </ul>
        </nav>
        <div id="hamburger-icon" onClick={toggleMobileMenu}>
          <div className={`bar1 ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar2 ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar3 ${menuOpen ? "open" : ""}`}></div>
        </div>
        <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Shop" className="nav-link">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/Blog" className="nav-link">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className="nav-link">
              Contact
            </NavLink>
          </li>
          <div className="d-flex">
            <li className="icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </li>
            <li className="icon">
              <FontAwesomeIcon icon={faHeart} />
            </li>
          </div>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
