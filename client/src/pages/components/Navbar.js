import React, { useState } from "react";
import Logo from "../Logo/logo.png";
import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar({
	energizers,
	setAllEnergizers,
	initialRecentEnergizers,
	initialRatedEnergizers,
	setMostRecentEnergizers,
	setRatedEnergizers,
}) {
	const [showSearch, setShowSearch] = useState(false);
	const [query, setQuery] = useState("");
	console.log(energizers);
	const handleToggleSearch = () => {
		setShowSearch(!showSearch);
	};

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
			<section className="logo-sec">
				<img className="logo" src={Logo} alt="logo" />
			</section>
			<nav className="nav-bar">
				<div className="search-wrapper nav-sub-wrapper">
					<FaSearch className="magnifier" onClick={handleToggleSearch} />

					<input
						type="text"
						placeholder="Search..."
						value={query}
						onChange={handleSearch}
					/>
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
