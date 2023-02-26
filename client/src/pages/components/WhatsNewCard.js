import React from "react";
import { Link } from "react-router-dom";

function WhatsNewCard() {
    return (
        <div className="most-recent-new-wrapper">
            <div className="most-recent-new-energizer"></div>
            <Link to="/energizer-detail" className="whats-new-name">Name</Link>
        </div>
    );
}
export default WhatsNewCard;