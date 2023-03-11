import React, { useState } from "react";
import Logo from "../Logo/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar({
	showSearch,
	energizers,
	setAllEnergizers,
	initialRecentEnergizers,
	initialRatedEnergizers,
	setMostRecentEnergizers,
	setRatedEnergizers,
}) {
	const [query, setQuery] = useState("");

	const handleSearch = (event) => {
		setQuery(event.target.value);
		const searchQuery = event.target.value.toLowerCase();
		if (setAllEnergizers) {
			const filteredEnergizers = energizers.filter((energizer) => {
				return (
					energizer.name.toLowerCase().includes(searchQuery) ||
					energizer.description.toLowerCase().includes(searchQuery)
				);
			});
			setAllEnergizers(filteredEnergizers);
		}
		if (setMostRecentEnergizers) {
			const filteredRecentEnergizers = initialRecentEnergizers.filter(
				(energizer) => {
					return (
						energizer.name.toLowerCase().includes(searchQuery) ||
						energizer.description.toLowerCase().includes(searchQuery)
					);
				}
			);
			setMostRecentEnergizers(filteredRecentEnergizers);
		}
		if (setRatedEnergizers) {
			const filteredRatedEnergizers = initialRatedEnergizers.filter(
				(energizer) => {
					return (
						energizer.name.toLowerCase().includes(searchQuery) ||
						energizer.description.toLowerCase().includes(searchQuery)
					);
				}
			);
			setRatedEnergizers(filteredRatedEnergizers);
		}
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
					<NavLink
						className="page"
						activeClassName="active-page"
						exact
						to="/home"
					>
						Home
					</NavLink>
					<NavLink
						className="page create-energizer"
						activeClassName="active-page"
						to="/create-energizer"
					>
						Create Energizer
					</NavLink>
					<NavLink
						className="page"
						activeClassName="active-page"
						to="/energizers"
					>
						Energizers
					</NavLink>
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
