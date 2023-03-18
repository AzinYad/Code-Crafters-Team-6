import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./CreateEnergiser.css";

const CreateEnergiser = () => {
	const [energiserName, setEnergiserName] = useState("");
	const [enrgiserDescription, setEnergiserDescription] = useState("");
	const [mediaType, setMediaType] = useState("image");
	const [mediaUrl, setMediaUrl] = useState("");
	const [rating, setRating] = useState(3); // Add state for selected rating

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
		// check if name has at most 50 characters
		if (energiserName.length > 50) {
			alert("The energizer name must have at most 50 characters");
			return;
		}
		// check if description has at least 50 characters
		if (enrgiserDescription.length < 50) {
			alert("The energizer description must have at least 50 characters");
			return;
		}
		//validate the media url if it is not empty
		if (mediaUrl && !isValidUrl(mediaUrl)) {
			alert("Please enter a valid url for the media");
			return;
		}
		let energizer = {
			name: energiserName,
			description: enrgiserDescription,
			rating: rating || 3, // Add rating to the energizer object
			mediaType: mediaType,
			mediaUrl: mediaUrl,
		};

		fetch("/api/energizers", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(energizer),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error("Failed to submit energizer");
				}
				return res.json();
			})
			.then((data) => {
				console.log(data);
				alert("Energizer submitted successfully");
				setEnergiserName("");
				setEnergiserDescription("");
				setMediaType("image");
				setMediaUrl("");
				setRating(3); // Reset rating to default value after submission
			})
			.catch((error) => {
				console.warn("internal server error:", error);
				alert("Failed to submit energizer");
			});
	};
	const isValidUrl = (url) => {
		try {
			new URL(url);
			return true;
		} catch (e) {
			return false;
		}
	};

	return (
		<main className="main-page">
			<Navbar showSearch={false} />
			<form className="create-form" onSubmit={handleEnergiserAdder}>
				<section className="flex-sec fullname">
					<label htmlFor="fullname">
						Energizer’s Name: <span className="required">*</span>
					</label>
					<input
						onChange={(e) => setEnergiserName(e.target.value)}
						type="text"
						value={energiserName}
						placeholder="Full Name"
						name="energisername"
						required
					/>
				</section>
				<section className="flex-sec url-input">
					<label htmlFor="url-input">Image Or Video</label>
					<select
						id="url-input"
						name="media-type"
						value={mediaType}
						onChange={(e) => setMediaType(e.target.value)}
					>
						<option value="image" className="url-input">Image</option>
						<option value="video" className="url-input">Video</option>
					</select>
					<input
						type="text"
						placeholder="Insert a URL"
						name="urlInput"
						value={mediaUrl}
						onChange={(e) => setMediaUrl(e.target.value)}
					/>
				</section>
				<section className="flex-sec description">
					<label htmlFor="description">Energizer Description:</label>
					<textarea
						onChange={(e) => setEnergiserDescription(e.target.value)}
						type="text"
						value={enrgiserDescription}
						placeholder="Add some description about this energizer..."
						name="enrgiserdescription"
						required
					/>
				</section>
				<button type="submit">Submit</button>
			</form>
			<Footer />
		</main>
	);
};

export default CreateEnergiser;
