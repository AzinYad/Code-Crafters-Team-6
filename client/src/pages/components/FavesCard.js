import React from "react";
import { Link } from "react-router-dom";

function FavesCard({ item }) {
	return (
		<div className="fave-energiser-box">
			<section className="fave-energiser">{item.description}</section>
			<section className="fave-energiser-info">
				<Link to="/energiser-detail" className="info-sec-name">
					{item.name}
				</Link>
				<p>More Details</p>
			</section>
		</div>
	);
}
export default FavesCard;
