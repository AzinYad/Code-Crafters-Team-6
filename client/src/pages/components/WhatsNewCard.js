import React from "react";
import { Link } from "react-router-dom";

function WhatsNewCard(props) {

    return (
        <div className="most-recent-new-wrapper">
            <div className="most-recent-new-energizer">{props.description}</div>
            <Link to={`/energizers/${props.id}`} className="whats-new-name">{props.name}</Link>
        </div>
    );
}
export default WhatsNewCard;