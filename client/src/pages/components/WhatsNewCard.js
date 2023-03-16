import React from "react";
import { Link } from "react-router-dom";

function WhatsNewCard(props) {

    return (
        <div className="most-recent-container" >
            <div className="most-recent-new-wrapper">
                <div className="most-recent-new-energizer">
                    <section className="recent-energizr-description">{props.description}</section>
                </div>
                <Link to={`/energizers/${props.id}`} className="whats-new-name">{props.name}</Link>
            </div>
        </div>
    );
}
export default WhatsNewCard;