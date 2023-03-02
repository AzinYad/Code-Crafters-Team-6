import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { FaRegHeart, FaHeart, FaShare } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./EnergiserDetail.css";

function EnergiserDetail() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [isFavourite, setIsFavourite] = useState(false);
    const [favouriteEnergizersArr, setFavouriteEnergizersArr] = useState([]);

    useEffect(() => {
        fetch(`/api/energizers/${id}`)
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

        const favouriteStatus = localStorage.getItem(id);
        setIsFavourite(favouriteStatus ? JSON.parse(favouriteStatus) : false);
        console.log("favourite status:", favouriteStatus);

        const favourites = JSON.parse(localStorage.getItem("favouriteEnergizers")) || [];
        setFavouriteEnergizersArr(favourites);
        console.log("favouriteEnergizers:", favourites);
    }, [id, setFavouriteEnergizersArr]);

    const toggleFavourite = () => {
        const newFavouriteStatus = !isFavourite;
        setIsFavourite(newFavouriteStatus);
        localStorage.setItem(id, newFavouriteStatus.toString());
        console.log("new favourite status:", newFavouriteStatus);

        setFavouriteEnergizersArr((prevFavouriteEnergizersArr) => {
            const updatedArr = newFavouriteStatus
                ? [...prevFavouriteEnergizersArr, item]
                : prevFavouriteEnergizersArr.filter((e) => e.id !== item.id);

            localStorage.setItem("favouriteEnergizers", JSON.stringify(updatedArr));
            console.log(updatedArr);

            return updatedArr;
        });
    };



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
            <h1 className="energizer-name">{item.name}</h1>
            <section className="columns-sec">
                <div className="episode-sec">
                    <div className="energizer-preview"></div>
                    <div className="rating-sec">
                        <div className="stars-sec">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarHalf />
                            <BsStar />
                        </div>
                        <p className="rate">{item.average_rate}</p>
                    </div>
                    <div className="favorite-sec">
                        {isFavourite ? (
                            <FaHeart onClick={toggleFavourite} />
                        ) : (
                            <FaRegHeart onClick={toggleFavourite} />
                        )}
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
