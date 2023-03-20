import React from "react";
import { Link } from "react-router-dom";

function WhatsNewCard(props) {

    return (
        <div className="most-recent-container" >
            <div className="most-recent-new-wrapper">
                <div className="most-recent-new-energizer">
                    <section className="fave-thumbnail">
                        {props.image_url ? (
                            <img src={props.image_url} alt="props pic" className="fave-thumbnail-preview" />
                        ) : (
                            props.video_url && <iframe src={props.video_url} className="fave-thumbnail-preview" title="energizer video" />
                        )}
                    </section>
                </div>
                <Link to={`/energizers/${props.id}`} className="whats-new-name">{props.name}</Link>
            </div>
        </div>
    );
}
export default WhatsNewCard;