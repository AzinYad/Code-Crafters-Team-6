import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FavesCard from "./components/FavesCard";
import WhatsNewCard from "./components/WhatsNewCard";
import { useState, useEffect } from "react";
import "./Home.css";

export function Home() {
	const [allEnergizers, setAllEnergizers] = useState([]);
	useEffect(() => {
		fetch("/api/energizers")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setAllEnergizers(body);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	return (
		<main className="main-page">
			<Navbar />
			<h1 className="faves-title">OUR FAVES</h1>
			<div className="our-faves">
				{allEnergizers.map((item) => {
					return (
						<div key={item.id}>
							<FavesCard item={item} />
						</div>
					);
				})}
			</div>
			<h1 className="Whats-New-title">What's New</h1>
			<div className="whats-new">
				<WhatsNewCard />
				<WhatsNewCard />
			</div>
			<Footer />
		</main>
	);
}

export default Home;
