import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroCarousel() {
    const [highestRatedEnergizers, setHighestRatedEnergizers] = useState([]);

    useEffect(() => {
        fetch("/api/energizers?sort_by=rating")
            .then((response) => response.json())
            .then((energizers) => {
                const highestRatedEnergizers = energizers.slice(0, 3);
                setHighestRatedEnergizers(highestRatedEnergizers);
            })
            .catch((error) => {
                console.error("Error fetching energizers", error);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {highestRatedEnergizers.map((energizer) => (
                <div key={energizer.id}>
                    <h2>{energizer.name}</h2>
                    <p>{energizer.description}</p>
                    <p>Rating: {energizer.rating}</p>
                </div>
            ))}
        </Slider>
    );
}

export default HeroCarousel;
