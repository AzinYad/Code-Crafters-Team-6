import React, { useState }  from "react";
import Logo from "../Logo/logo.png";
import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import SearchEnergizers from "../components/SearchEnergizers";


function Navbar({ energizers }) {
const [showSearch, setShowSearch] = useState(false);

const handleSearchClick = () => {
	setShowSearch(!showSearch);
};
    return (
			<div>
				<section className="logo-sec">
					<img className="logo" src={Logo} alt="logo" />
				</section>
				<nav className="nav-bar">
					<div className="search-wrapper nav-sub-wrapper">
						<FaSearch className="magnifier" onClick={handleSearchClick} />
						{showSearch && <SearchEnergizers energizers={energizers} />}
					</div>
					<div className="pages-wrapper nav-sub-wrapper">
						<Link className="page" to="/home">
							Home
						</Link>
						<Link className="page create-energizer" to="/create-energizer">
							Create Energizer
						</Link>
						<Link className="page" to="/energizers">
							Energizers
						</Link>
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