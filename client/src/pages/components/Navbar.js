import React from "react";
import Logo from "../Logo/logo.png";
import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar({ showSearch, setQuery, query }) {
	const handleSearch = (event) => {
		setQuery(event.target.value.toLowerCase());
	};
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
					<section className="logo-sec">
						<img className="logo" src={Logo} alt="logo" />
					</section>
				)}
				<div className="pages-wrapper nav-sub-wrapper">
					<Link
						className="page"
						activeClassName="active-page"
						exact
						to="/home"
					>
						Home
					</Link>
					<Link
						className="page create-energizer"
						activeClassName="active-page"
						to="/create-energizer"
					>
						Create Energizer
					</Link>
					<Link
						className="page"
						activeClassName="active-page"
						to="/energizers"
					>
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
