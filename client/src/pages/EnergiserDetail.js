import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./EnergiserDetail.css";
import EnergizerDeleteButton from "./components/EnergizerDeleteButton";

function EnergiserDetail() {
	const { id } = useParams();
	const [item, setItem] = useState(null);
	const [currentValue, setCurrentValue] = useState(0);
	const [hoverValue, setHoverValue] = useState(undefined);
	const stars = Array(5).fill(0);

	const handleClick = (value) => {
		setCurrentValue(value);
		fetch(`/api/energizers/${id}/rate`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ value }),
		})
			.then((res) => res.json())
			.then((data) => {
				setItem(data);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const handleMouseOver = (newHoverValue) => {
		setHoverValue(newHoverValue);
	};

	const handleMouseLeave = () => {
		setHoverValue(undefined);
	};



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
		const [favourite, setFavourite] = useState(() => {
			const localData = localStorage.getItem("favourite");
			return localData ? JSON.parse(localData) : [];
		});

		const [isFavourite, setIsFavourite] = useState(() => {
			return !!favourite.find((i) => i.id === +id);
		});

		useEffect(() => {
			localStorage.setItem("favourite", JSON.stringify(favourite));
			setIsFavourite(!!favourite.find((i) => i.id === +id));
		}, [favourite]);

		const handleClick = (e) => {
			e.persist();
			e.preventDefault();

			const checkIfIsFav = favourite.find((i) => {
				return i.id === +id;
			});

			console.log(checkIfIsFav);
			if (checkIfIsFav) {
				let newArr = favourite.filter((i) => i.id != id);
				setFavourite(newArr);
			} else {
				setFavourite([...favourite, item]);
			}
			localStorage.setItem("favourite", JSON.stringify(favourite));
		};

		return (
			<div className="favorite-sec">
				<button className="fav-btn" onClick={(e) => handleClick(e)}>
					{isFavourite ? <FaHeart /> : <FaRegHeart />}
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
			<div className="columns-delete-wrapper">
				<section className="columns-sec">
					<div className="episode-sec">
						<div className="energizer-preview"></div>
						<section className="icons-wrapper">
							<div className="rating-sec">
								<p className="rate">Average rate:</p>
								<p>{item.average_rate}</p>
							</div>
							<FavouriteButton />
							<ShareButton />
						</section>
						<section className="feedback-rate" >
							<p>How do you rate this energizer?</p>
							<div className="stars-sec">
								{stars.map((_, index) => {
									return (
										<FaStar
											key={index}
											size={24}
											onClick={() => handleClick(index + 1)}
											onMouseOver={() => handleMouseOver(index + 1)}
											onMouseLeave={handleMouseLeave}
											color={(hoverValue || currentValue) > index ? "#FFBA5A" : "#a9a9a9"}
										/>
									);
								})}
							</div>
						</section>
					</div>
					<div className="instruction-sec">
						<h5 className="instruction-title">How to play</h5>
						<div className="instruction">{item.description}</div>
					</div>
				</section>
				<section className="delete-sec" >
					<EnergizerDeleteButton className="delete-btn" energizerId={item.id} />
				</section>
			</div>
			<Footer />
		</main>
	);
}

export default EnergiserDetail;
