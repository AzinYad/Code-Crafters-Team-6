import React from "react";
import { Link } from "react-router-dom";

function FavesCard({ item }) {
	return (
		<Link to={`/energizers/${item.id}`} className="info-sec-name">
			<div className="fave-energizer-box">
				<section className="fave-energizer">{item.description}</section>
				<section className="fave-energizer-info">
					<h3>{item.name}</h3>
					<p>Rate:{item.rating}
					</p>
				</section>
			</div>
		</Link>
	);
}
export default FavesCard;
