import React from "react";
import { Link } from "react-router-dom";

function WhatsNewCard() {
    return (
        <div className="most-recent-new-wrapper">
            <div className="most-recent-new-energiser"></div>
            <Link to="/energiser-detail" className="whats-new-name">Name</Link>
        </div>
    );
}
export default WhatsNewCard;