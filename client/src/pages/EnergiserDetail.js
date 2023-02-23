import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
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
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarHalf />
                            <BsStar />
                        </div>
                        <p className="rate">3.5</p>
                    </div>
                    <div className="favorite-sec">
                        <FaRegHeart/>
                        <p>Add To Favourite </p>
                    </div>
                    <div className="share-sec">
                        <FaShare />
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