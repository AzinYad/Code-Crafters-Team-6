import React from "react";
import { Link } from "react-router-dom";

function FavesCard() {
	return (
		<div className="fave-energizer-box">
			<section className="fave-energizer"></section>
			<section className="fave-energizer-info">
				<Link to="/energizer-detail" className="info-sec-name">
					Name
				</Link>
				<p>More Details</p>
			</section>
		</div>
	);
}
export default FavesCard;
