import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./CreateEnergiser.css";

const CreateEnergiser = () => {
	const [energiserName, setEnergiserName] = useState("");
	const [enrgiserDescription, setEnergiserDescription] = useState("");

	const handleEnergiserAdder = (e) => {
		e.preventDefault();

		let energizer = {
			name: energiserName,
			description: enrgiserDescription,
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
	};

	return (
		<main className="main-page">
			<Navbar />
			<form className="create-form" onSubmit={handleEnergiserAdder}>
				<section className="flex-sec fullname">
					<label htmlFor="fullname">Creator’s Name :</label>
					<input
						onChange={(e) => setEnergiserName(e.target.value)}
						type="text"
						value={energiserName}
						placeholder="Full Name"
						name="energisername"
					/>
				</section>
				<section className="flex-sec url-input">
					<label htmlFor="url-input">Insert a URL:</label>
					<input
						type="text"
						// value={}
						placeholder="Insert a URL"
						name="urlInput"
					/>
				</section>
				<section className="flex-sec description">
					<label htmlFor="description">Energiser Description:</label>
					<textarea
						onChange={(e) => setEnergiserDescription(e.target.value)}
						type="text"
						value={enrgiserDescription}
						placeholder="Add some description about this energiser..."
						name="enrgiserdescription"
					/>
				</section>
				<button type="submit">Submit</button>
			</form>
			<Footer />
		</main>
	);
};

export default CreateEnergiser;
