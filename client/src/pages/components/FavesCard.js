import React from "react";
import { Link } from "react-router-dom";

function FavesCard({ item }) {
	return (
		<Link to={`/energizers/${item.id}`} className="info-sec-name">
			<div className="fave-energizer-box">
				<section className="fave-energizer">
					{item.image_url ? (
						<img src={item.image_url} alt="item pic" className="fave-thumbnail-preview" />
					) : (
						item.video_url && <iframe src={item.video_url} className="fave-thumbnail-preview" title="energizer video" />
					)}
				</section>
				<section className="fave-energizer-info">
					<h3>{item.name}</h3>
					<p className="rate">Rate:{item.rating}
					</p>
				</section>
			</div>
		</Link>
	);
}
export default FavesCard;
