import React from "react";
import { Link } from "react-router-dom";

function EnergisersCard({ item }) {
	return (
		<Link to={`/energizer-detail/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
			<div className="energizer-box">
				<section className="energizer">{item.description}</section>
				<section className="energizer-info-sec">
					<h3 className="info-sec-name">
						{item.name}
					</h3>
					<p>Rate:{item.rating}</p>
				</section>
			</div>
		</Link >
	);
}
export default EnergisersCard;
