import React from "react";
import { Link } from "react-router-dom";

function WhatsNewCard(){
    return(
    <div className="new-energiser-and-name-box">
        <div className="whats-new-box"></div>
            <Link to="/energiser-detail" className="whats-new-name">Name</Link>
    </div>
    );
}
export default WhatsNewCard;