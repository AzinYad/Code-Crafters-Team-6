import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FavesCard from "./components/FavesCard";
import WhatsNewCard from "./components/WhatsNewCard";
import React, { useState, useEffect } from "react";
import "./Home.css";

export function Home() {
	const [mostRecentEnergizers, setMostRecentEnergizers] = useState([]);
	let favouriteEnergizers = localStorage.getItem("favouriteEnergizers");
	favouriteEnergizers = JSON.parse(favourites_array);

	useEffect(() => {
		// Make API call to fetch list of energizers
		fetch("/api/energizers")
			.then((response) => response.json())
			.then((energizers) => {
				// Sort energizers by date, most recent first
				energizers.sort((a, b) => new Date(b.submission_date) - new Date(a.submission_date));
				// Get the two most recent energizers
				const mostRecentEnergizers = energizers.slice(0, 2);
				setMostRecentEnergizers(mostRecentEnergizers);
			})
			.catch((error) => {
				console.error("Error fetching energizers", error);
			});
	}, []);

	return (
		<main className="main-page">
			<Navbar />
			<h1 className="faves-title">OUR FAVES</h1>
			<div className="our-faves">
				{favouriteEnergizers.map((item) => {
					return (
						<div key={item.id}>
							<FavesCard item={item} />
						</div>
					);
				})}
			</div>
			<h1 className="Whats-New-title">What's New</h1>
			<div className="whats-new">
				{mostRecentEnergizers.map((energizer) => (
					<WhatsNewCard
						key={energizer.id}
						id={energizer.id}
						name={energizer.name}
						description={energizer.description}
					/>
				))}
			</div>
			<Footer />
		</main>
	);
}

export default Home;
