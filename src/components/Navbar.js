import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  /*
  In this commit, Navbar can access the auth context,
  since it is now wrapped by an AuthProvider in App.js.
  So, no errors anymore. 
  */
  const { currentUser, logout } = useAuth()
  /*
  Take a look at the currentUser object in console.
  There's a property called photoUrl.
  For me it is null, but if I had a profile picture
  it should point to that.
  It also has things like displayName, and email.
  */
  console.log(currentUser)

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
            {/*
            If currentUser is defined, show the profile picture and a logout link.
            Otherwise, show the login link.
            */}
            {currentUser ? <div style={{ height: '100%', display: 'flex', flexDirection: 'row', }}><img src={currentUser.photoUrl ?? 'img/profile.png'} alt="profile picture" height="25" width="25" style={{ borderRadius: '50%', margin: 'auto' }} /><Link className="nav-links" onClick={() => {
              closeMobileMenu()
              logout()
            }}>Logout</Link></div> : <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
              Login
            </Link>}
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
