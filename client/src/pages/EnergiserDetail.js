import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Star from "../pages/logo/star.png";
import HalfStar from "../pages/logo/halfStar.png";
import FullStar from "../pages/logo/fullStar.png";
import Heart from "../pages/logo/heart.png";
import Share from "../pages/logo/share.png";
import "./EnergiserDetail.css";

function EnergiserDetail() {
    return (
        <main className="main-page">
            <Navbar />
            <h1 className="energiser-name">Name</h1>
            <section className="columns-sec">
                <div className="episode-sec">
                    <div className="energiser-preview"></div>
                    <div className="rating-sec">
                        <div className="stars-sec">
                            <img className="star-icon" src={FullStar} alt="full star" />
                            <img className="star-icon" src={FullStar} alt="full star" />
                            <img className="star-icon" src={FullStar} alt="full star" />
                            <img className="star-icon" src={HalfStar} alt="half star" />
                            <img className="star-icon" src={Star} alt="star icon" />
                        </div>
                        <p className="rate">3.5</p>
                    </div>
                    <div className="favorite-sec">
                        <img className="heart-icon" src={Heart} alt="heart icon" />
                        <p>Add To Favourite </p>
                    </div>
                    <div className="share-sec">
                        <img className="share-icon" src={Share} alt="share icon" />
                        <p>Share with others</p>
                    </div>
                </div>
                <div className="instruction-sec">
                    <h5 className="instruction-title">How to play</h5>
                    <div className="instruction"></div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default EnergiserDetail;