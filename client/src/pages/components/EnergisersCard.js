import React from "react";
import { Link } from "react-router-dom";

function EnergisersCard({ item }) {
    return (
        <Link to={`/energiser-detail/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div className="energiser-box">
                <section className="energiser">{item.description}</section>
                <section className="energiser-info-sec">
                    <h3 className="info-sec-name">{item.name}</h3>
                    <p>Rate: {item.rating}</p>
                </section>
            </div>
        </Link>
    );
}

export default EnergisersCard;


