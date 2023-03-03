import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FavesCard from "./components/FavesCard";
import WhatsNewCard from "./components/WhatsNewCard";

import "./Home.css";

export function Home() {
	return (
		<main className="main-page">
			<Navbar />
			<h1 className="faves-title">OUR FAVES</h1>
			<div className="our-faves">
				<FavesCard />
				<FavesCard />
				<FavesCard />
				<FavesCard />
			</div>
			<h1 className="Whats-New-title">What is New</h1>
			<div className="whats-new">
				<WhatsNewCard />
				<WhatsNewCard />
			</div>
			<Footer />
		</main>
	);
}

export default Home;
