import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function HeroCarousel() {
    const [highestRatedEnergizers, setHighestRatedEnergizers] = useState([]);

    useEffect(() => {
        fetch("/api/energizers?sort_by=rating")
            .then((response) => response.json())
            .then((energizers) => {
                const highestRatedEnergizers = energizers.slice(0, 4);
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
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings} className="slider">
            {highestRatedEnergizers.map((energizer) => (
                <Link key={energizer.id} to={`/energizers/${energizer.id}`} style={{ textDecoration: "none !important" }} >
                    <div>
                        <section className="carousel-tumbnail"></section>
                        <h2 >{energizer.name}</h2>
                    </div>
                </Link>
            ))}
        </Slider>
    );
}

export default HeroCarousel;
