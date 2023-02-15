import React from "react";
// import { useEffect, useState } from "react";
// import Magnifier from "../logo/magnifying-glass.svg";
import Login from "../logo/Login.png";
import { Link } from "react-router-dom";
function Navbar(){
    return(
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
    );
};

export default Navbar;