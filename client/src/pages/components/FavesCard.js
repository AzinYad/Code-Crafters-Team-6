import React from "react";
import { Link } from "react-router-dom";

function FavesCard({ item }) {
	return (
		<div className="fave-energizer-box">
			<section className="fave-energizer">{item.description}</section>
			<section className="fave-energizer-info">
				<Link to={`/energizers/${item.id}`} className="info-sec-name">
					{item.name}
				</Link>
				<p>rating</p>
			</section>
		</div>
	);
}
export default FavesCard;
