import React from "react";
import { Link } from "react-router-dom";

function EnergisersCard({ item }) {
	return (
		<div className="energiser-box">
			<section className="energiser">{item.description}</section>
			<section className="energiser-info-sec">
				<Link to="/energiser-detail" className="info-sec-name">
					{item.name}
				</Link>
				<p>Rate</p>
			</section>
		</div>
	);
}
export default EnergisersCard;
