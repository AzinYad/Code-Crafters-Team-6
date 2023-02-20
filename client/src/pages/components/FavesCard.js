import React from "react";
import { Link } from "react-router-dom";

function FavesCard() {
    return (
        <div className="fave-energiser-box">
            <section className="fave-energiser"></section>
            <section className="fave-energiser-info">
                <Link to="/energiser-detail" className="info-sec-name">Name</Link>
                <p>More Details</p>
            </section>
        </div>
    );
}
export default FavesCard;