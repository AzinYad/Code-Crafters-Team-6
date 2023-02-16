import React from "react";
// import { useEffect, useState } from "react";
// import Magnifier from "../logo/magnifying-glass.svg";
import Logo from "../logo/spark.png";
import Login from "../logo/Login.png";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div>
            <section className="logo-sec">
                <img className="logo" src={Logo} alt="logo" />
                <h6>Your Daily Energy Boost</h6>
            </section>
            <nav className="nav-bar">
                <input className="search-input" type="search" placeholder="Search..." />
                {/* <div className="search">
                <img className="magnifier" src={Magnifier} alt="magnifier" />
                Search...</div> */}
                <div className="pages-link">
                    <Link className="page" to="/home">Home</Link>
                    <Link className="page create-energiser" to="/create-energiser">Create Energiser</Link>
                    <Link className="page" to="/energisers">Energisers</Link>
                </div>
                <div className="login">
                    <img className="login-icon" src={Login} alt="login icon" />
                    Log in</div>
            </nav>
        </div>
    );
};

export default Navbar;