import React from "react";
import { Link } from "react-router-dom";
function EnergisersCard() {
    return (
        <div className="energiser-box">
            <section className="energiser"></section>
            <section className="energiser-info-sec">
                <Link to="/energiser-detail" className="info-sec-name">Name</Link>
                <p>Rate</p>
            </section>
        </div>
    );
}
export default EnergisersCard;