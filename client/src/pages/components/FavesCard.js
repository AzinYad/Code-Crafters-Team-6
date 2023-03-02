import React from "react";
import { Link } from "react-router-dom";

function FavesCard({ item }) {
	return (
		<Link to={`/energizers/${item.id}`} className="fave-energizer-box" style={{ textDecoration: "none", color: "inherit" }}>
			<section className="fave-energizer">{item.description}</section>
			<section className="fave-energizer-info">
				<h2 className="info-sec-name">
					{item.Name}
				</h2>
				<p>More Details</p>
			</section>
		</Link>
	);
}
export default FavesCard;
