// src/components/Navbar.jsx
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'  // Create this CSS for styling

const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        // Add your logout logic here (e.g., clear session/token)
        sessionStorage.clear()
        navigate('/login')  // Redirect to login page after logout
    }

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="logo-placeholder">
                    <img src="/images/logo.jpg" alt="Logo" className="logo" />
                </div>
                <span className="navbar-title">Car Rental System</span>

            </div>

            <div className="navbar-right">
                <Link to="/my-bookings" className="nav-link">My Bookings</Link>
                <Link to="/my-profile" className="nav-link">My Profile</Link>
                <button onClick={handleLogout} className="nav-link logout-btn">Logout</button>
            </div>
        </nav>
    )
}

export default Navbar
