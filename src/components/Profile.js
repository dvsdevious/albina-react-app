import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

const profileStyles = { height: '100%', display: 'flex', flexDirection: 'row', }
const profilePhotoStyles = { height: '30px', width: '30px', borderRadius: '50%', margin: 'auto' }

/*
The Profile component handles selecting whether to show the login or logout link.
Yuo can rename this component and adjust styles as you like.
*/
function Profile({ closeMobileMenu }) {
    const { currentUser, logout } = useAuth()

    const profilePhotoSrc = currentUser?.photoUrl ?? 'img/profile.png'
    const logoutHandler = () => {
        closeMobileMenu()
        logout()
    }

    if (currentUser) {
        return (
            <div style={profileStyles}>
                <img src={profilePhotoSrc} alt="profile picture" style={profilePhotoStyles} />
                <Link className="nav-links" onClick={logoutHandler}>Logout</Link>
            </div>
        )
    }
    return (
        <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
            Login
        </Link>
    )
}

export default Profile
