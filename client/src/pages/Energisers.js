import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import EnergisersCard from "./components/EnergisersCard.js";
import backgroundImage from "./Logo/bck2.png";
import "./Energisers.css";
import { useState, useEffect } from "react";

function Energisers() {
	const [allEnergizers, setAllEnergizers] = useState([]);
	//console.log(allEnergizers);
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
		<div className="root " style={{ backgroundImage: `url(${backgroundImage})` }}>
			<main className="main-page" >
				<Navbar />
				<section className="card-sec">
					{allEnergizers.map((item) => {
						return (
							<div key={item.id}>
								<EnergisersCard item={item} />
								{/* <EnergizerDeleteButton energizerId={item.id} /> */}
							</div>
						);
					})}
				</section>
				<Footer />
			</main>
		</div>
	);
}

export default Energisers;
