import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./EnergiserDetail.css";

function EnergiserDetail() {
	const { id } = useParams();
	// console.log(id);
	const [item, setItem] = useState(null);

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

	const FavouriteButton = () => {
		const [favourite, setFavourite] = useState([]);
		console.log(favourite);
		const checkIfIsFav = favourite.find(({ id }) => id === id);

		const handleClick = (e) => {
			e.preventDefault();
			e.stopPropagation();
			console.log(checkIfIsFav);
			if (!checkIfIsFav) {
				setFavourite([...favourite, item]);
			} else {
				setFavourite(favourite.filter(({ id }) => id !== id));
			}

			console.log(favourite);
		};
		return (
			<div className="favorite-sec">
				<button
					className="fav-btn"
					onClick={(e) => {
						e.persist();
						handleClick(e);
					}}
				>
					<FaRegHeart />
				</button>
				<p>Add To Favourite</p>
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
						<p className="rate">{item.rating}</p>
					</div>
					<FavouriteButton />
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
