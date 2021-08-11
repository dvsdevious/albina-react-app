import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Profile from "./pages/Profile";
import "./Navbar.css";
import styled from "styled-components";

const Nav = styled.nav`
  height: 64px;
  background: black;
  opacity: 90%;
  justify-content: center;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  width: 100%;
`;

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
    <Nav>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/img/logo.png" alt="logo" />
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
              <Profile closeMobileMenu={closeMobileMenu} />
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
          <Link to="/signup">
            {button && <Button variant="outline-light">Sign Up</Button>}
          </Link>
        </div>
      </nav>
    </Nav>
  );
}
export default Navbar;
