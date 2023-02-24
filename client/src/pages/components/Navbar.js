import React from "react";
import Logo from "../Logo/logo.png";
import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar() {
    return (
        <div>
            <section className="logo-sec">
                <img className="logo" src={Logo} alt="logo" />
            </section>
            <nav className="nav-bar">
                <div className="search-wrapper nav-sub-wrapper">
                    <FaSearch className="magnifier" />
                    <input className="search-input" type="search" placeholder="Search..." />
                </div>
                <div className="pages-wrapper nav-sub-wrapper">
                    <Link className="page" to="/home">Home</Link>
                    <Link className="page create-energizer" to="/create-energizer">Create Energizer</Link>
                    <Link className="page" to="/energizers">Energizers</Link>
                </div>
                <Link className="login-wrapper nav-sub-wrapper" to="/login">
                    <FaUserCircle className="login-icon" />
                    Log in</Link>
            </nav>
        </div>
    );
}

export default Navbar;