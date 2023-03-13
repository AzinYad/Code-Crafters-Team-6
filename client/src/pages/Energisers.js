import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import EnergisersCard from "./components/EnergisersCard.js";
import "./Energisers.css";
import Pagination from "./components/Pagination";
import { useState, useEffect } from "react";

function Energisers() {
	const [allEnergizers, setAllEnergizers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	//must be a positive integer greater than 0, setting the number of posts per page
	const [energizersPerPage] = useState(10);

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

	// get current post
	const indexOfLastEnergizer = currentPage * energizersPerPage;
	const indexOfFirstEnergizer = indexOfLastEnergizer - energizersPerPage;
	const currentEnergizer = allEnergizers.slice(
		indexOfFirstEnergizer,
		indexOfLastEnergizer
	);
	// change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<main className="main-page" >
			<Navbar showSearch={true} />
			<section className="card-sec">
				{currentEnergizer.map((item) => {
					return (
						<div key={item.id}>
							<EnergisersCard item={item} />
						</div>
					);
				})}
			</section>
			<Pagination
				postsPerPage={energizersPerPage}
				totalPosts={allEnergizers.length}
				paginate={paginate}
			/>
			<Footer />
		</main>
	);
}

export default Energisers;
