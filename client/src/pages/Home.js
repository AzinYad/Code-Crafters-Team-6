import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FavesCard from "./components/FavesCard";
import WhatsNewCard from "./components/WhatsNewCard";

import "./Home.css";

export function Home() {
	//retrieves object from the localStorage
	let favourites_array = localStorage.getItem("favourite");
	favourites_array = JSON.parse(favourites_array);
	//removes duplicate items from array of objects
	const uniqueFavourites_array = Array.from(new Set(favourites_array.map((a) => a.id))).map(
		(id) => {
			return favourites_array.find((a) => a.id === id);
		}
	);
	return (
		<main className="main-page">
			<Navbar />
			<h1 className="faves-title">OUR FAVES</h1>
			<div className="our-faves">
				{uniqueFavourites_array.map((item) => {
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
