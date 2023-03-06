import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FavesCard from "./components/FavesCard";
import WhatsNewCard from "./components/WhatsNewCard";
import React, { useState, useEffect } from "react";
import "./Home.css";

export function Home() {
	const [mostRecentEnergizers, setMostRecentEnergizers] = useState([]);

	useEffect(() => {
		fetch("/api/energizers?sort_by=recent")
			.then((response) => response.json())
			.then((energizers) => {
				const mostRecentEnergizers = energizers.slice(0, 2);
				setMostRecentEnergizers(mostRecentEnergizers);
			})
			.catch((error) => {
				console.error("Error fetching energizers", error);
			});
	}, []);

	//retrieves object from the localStorage
	let favourites_array = localStorage.getItem("favourite");
	favourites_array = JSON.parse(favourites_array);
	
	return (
		<main className="main-page">
			<Navbar />
			<h1 className="faves-title">OUR FAVES</h1>
			<div className="our-faves">
				{favourites_array ? favourites_array.slice(0,4).map((item) => {
					return (
						<div key={item.id}>
							<FavesCard item={item} />
						</div>
					);
				}): <h3>"Add some favourites to your energizers"</h3>}
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
