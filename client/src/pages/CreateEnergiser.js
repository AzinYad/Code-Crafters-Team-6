import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./CreateEnergiser.css";

const CreateEnergiser = () => {
	const [energiserName, setEnergiserName] = useState("");
	const [enrgiserDescription, setEnergiserDescription] = useState("");
	const [rating, setRating] = useState(1); // Add state for selected rating

	const handleEnergiserAdder = (e) => {
		e.preventDefault();
		// check if any name field is empty
		if (!energiserName) {
			alert("Please enter an energizer name");
			return;
		}
		// check if any description field is empty
		if (!enrgiserDescription) {
			alert("Please enter an energizer description");
			return;
		}
		// check if description has at least 200 characters
		if (enrgiserDescription.length < 200) {
			alert("The energizer description must have at least 200 characters");
			return;
		}
		let energizer = {
			name: energiserName,
			description: enrgiserDescription,
			rating: rating, // Add rating to the energizer object
		};

		fetch("/api/energizers", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(energizer),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.warn("internal server error:", error);
			});
		setEnergiserName("");
		setEnergiserDescription("");
		setRating(1); // Reset rating to default value after submission
	};

	return (
		<main className="main-page">
			<Navbar />
			<form className="create-form" onSubmit={handleEnergiserAdder}>
				<section className="flex-sec fullname">
					<label htmlFor="fullname">Energizer’s Name :</label>
					<input
						onChange={(e) => setEnergiserName(e.target.value)}
						type="text"
						value={energiserName}
						placeholder="Full Name"
						name="energisername"
					/>
				</section>
				<section className="flex-sec url-input">
					<label htmlFor="url-input">Image Or Video URL:</label>
					<input type="text" placeholder="Insert a URL" name="urlInput" />
				</section>
				<section className="flex-sec description">
					<label htmlFor="description">Energizer Description:</label>
					<textarea
						onChange={(e) => setEnergiserDescription(e.target.value)}
						type="text"
						value={enrgiserDescription}
						placeholder="Add some description about this energizer..."
						name="enrgiserdescription"
					/>
				</section>
				<section className="flex-sec rating">
					<label htmlFor="rating">How do you rate this energizer?</label>
					<select
						name="rating"
						value={rating}
						onChange={(e) => setRating(e.target.value)}
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</section>
				<button type="submit">Submit</button>
			</form>
			<Footer />
		</main>
	);
};

export default CreateEnergiser;
