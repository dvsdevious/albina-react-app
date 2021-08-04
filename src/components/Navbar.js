import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/img/logo.png" alt="logo" width="150" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/workouts"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Workouts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/nutrition"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Nutrition
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faqs" className="nav-links" onClick={closeMobileMenu}>
              FAQ's
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
              Login
            </Link>
          </li>

          <li>
            <Link
              to="/signup"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
      </div>
    </nav>
  );
}
export default Navbar;
