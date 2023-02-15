import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FavesCard from "./components/FavesCard";
import WhatsNewCard from "./components/WhatsNewCard";
import "./Home.css";
// import logo from "./logo.svg";

export function Home() {
	// const [message, setMessage] = useState("Loading...");

	// useEffect(() => {
	// 	fetch("/api")
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error(res.statusText);
	// 			}
	// 			return res.json();
	// 		})
	// 		.then((body) => {
	// 			setMessage(body.message);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }, []);

	return (
	// 	<main role="main">
	// 		<div>
	// 			<img
	// 				className="logo"
	// 				data-qa="logo"
	// 				src={logo}
	// 				alt="Just the React logo"
	// 			/>
	// 			<h1 className="message" data-qa="message">
	// 				{message}
	// 			</h1>
	// 			<Link to="/about/this/site">About</Link>
	// 		</div>
	// 	</main>
	<main className="main-page">
		<Navbar />
			<h1 className="faves-title">OUR FAVES</h1>
		<div className="our-faves">
			<FavesCard />
			<FavesCard />
			<FavesCard />
			<FavesCard />
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
