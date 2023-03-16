import React from "react";
import Logo from "../Logo/logo.png";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { NavBarButtons } from "./logButtons/Nav-bar-buttons";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar({ showSearch }) {
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
						/>
					</div>
				) : (
					<section className="logo-sec">
						<img className="logo" src={Logo} alt="logo" />
					</section>
				)}
				<div className="pages-wrapper nav-sub-wrapper">
					<NavLink
						className="page"
						activeClassName="active-page"
						exact
						to="/home"
					>
						Home
					</NavLink>
					{isAuthenticated && (
						<NavLink
							className="page create-energizer"
							activeClassName="active-page"
							to="/create-energizer"
						>
							Create Energizer
						</NavLink>
					)}
					<NavLink
						className="page"
						activeClassName="active-page"
						to="/energizers"
					>
						Energizers
					</NavLink>
				</div>
				<NavBarButtons />
			</nav>
		</div>
	);
}

export default Navbar;
