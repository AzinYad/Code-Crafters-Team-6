import React from "react";
import Logo from "../Logo/logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { NavBarButtons } from "./logButtons/Nav-bar-buttons";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar({ showSearch, setQuery, query }) {
	const handleSearch = (event) => {
		setQuery(event.target.value.toLowerCase());
	};
	const { isAuthenticated } = useAuth0();
	return (
		<div>
			<nav className="nav-bar">
				{showSearch ? (
					<div className="search-wrapper nav-sub-wrapper">
						<FaSearch className="magnifier" />
						<input
							className="search-input"
							type="search"
							placeholder="Search..."
							value={query}
							onChange={handleSearch}
						/>
					</div>
				) : (
					<section className="logo-sec ">
						<img className="logo" src={Logo} alt="logo" />
					</section>
				)}
				<div className="pages-wrapper nav-sub-wrapper">
					<Link className="page" to="/home">
						Home
					</Link>
					{isAuthenticated && (
						<Link className="page create-energizer" to="/create-energizer">
							Create Energizer
						</Link>
					)}
					<Link className="page" to="/energizers">
						Energizers
					</Link>
				</div>
				<NavBarButtons className="login-btn nav-sub-wrapper" />
			</nav>
		</div>
	);
}

export default Navbar;
