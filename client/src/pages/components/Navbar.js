import React from "react";
import Logo from "../Logo/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar({ showSearch }) {
    return (
        <div>
            <nav className="nav-bar">
                {showSearch ? (
                    <div className="search-wrapper nav-sub-wrapper">
                        <FaSearch className="magnifier" />
                        <input className="search-input" type="search" placeholder="Search..." />
                    </div>
                ) : (
                    <section className="logo-sec">
                        <img className="logo" src={Logo} alt="logo" />
                    </section>
                )}
                <div className="pages-wrapper nav-sub-wrapper">
                    <NavLink className="page" activeClassName="active-page" exact to="/home">Home</NavLink>
                    <NavLink className="page create-energizer" activeClassName="active-page" to="/create-energizer">Create Energizer</NavLink>
                    <NavLink className="page" activeClassName="active-page" to="/energizers">Energizers</NavLink>
                </div>
                <Link className="login-wrapper nav-sub-wrapper" to="/login">
                    <FaUserCircle className="login-icon" />
                    Log in
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;