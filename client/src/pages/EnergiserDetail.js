import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./EnergiserDetail.css";

function EnergiserDetail() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`/api/energiser-detail/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then((body) => {
                setItem(body);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);

    const ShareButton = () => {
        const handleShare = () => {
            const shareUrl = window.location.href;
            navigator.clipboard.writeText(shareUrl);
            window.alert("Link copied to clipboard!");
        };

        return (
            <div className="share-sec">
                <button className="share-btn" onClick={handleShare}>
                    <FaShare />
                </button>
                <p>Share with others</p>
            </div>
        );
    };

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <main className="main-page">
            <Navbar />
            <h1 className="energiser-name">{item.name}</h1>
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
                        <p className="rate">{item.rating}</p>
                    </div>
                    <div className="favorite-sec">
                        <FaRegHeart />
                        <p>Add To Favourite </p>
                    </div>
                    <ShareButton />
                </div>
                <div className="instruction-sec">
                    <h5 className="instruction-title">How to play</h5>
                    <div className="instruction">{item.description}</div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default EnergiserDetail;
