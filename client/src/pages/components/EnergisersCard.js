import React from "react";
import { Link } from "react-router-dom";

function EnergisersCard({ item }) {
	return (
		<div className="energizer-box">
			<section className="energizer">{item.description}</section>
			<section className="energizer-info-sec">
				<Link to="/energizer-detail" className="info-sec-name">
					{item.name}
				</Link>
				<p>Rate</p>
			</section>
		</div>
	);
}
export default EnergisersCard;
