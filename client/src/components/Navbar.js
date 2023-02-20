import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
  return (

        <nav className="nav">
            <div className="site-title">Heroku</div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/this/site">CreateEnergiser</Link></li>
                 <li><Link to="/about/this/site">Energisers</Link></li>

                </ul>
        </nav>


  );
}
