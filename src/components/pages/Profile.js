import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const profileStyles = { height: "100%", display: "flex", flexDirection: "row" };
const profilePhotoStyles = {
  height: "30px",
  width: "30px",
  borderRadius: "50%",
  margin: "auto",
};

function Profile({ closeMobileMenu }) {
  const { currentUser, logout } = useAuth();

  const profilePhotoSrc = currentUser?.photoUrl ?? "img/profile.png";
  const logoutHandler = () => {
    closeMobileMenu();
    logout();
  };

  if (currentUser) {
    return (
      <div style={profileStyles}>
        <Link to="/dashboard">
          <img src={profilePhotoSrc} alt="profile" style={profilePhotoStyles} />
        </Link>
        <Link className="nav-links" onClick={logoutHandler}>
          Logout
        </Link>
      </div>
    );
  }
  return (
    <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
      Login
    </Link>
  );
}

export default Profile;
