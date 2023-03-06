import React, { useState } from "react";

function EnergizerDeleteButton({ energizerId, energizerName }) {
	const [isDeleting, setIsDeleting] = useState(false);
	// this function validates whether the energizer is in the local storage
	function findFavouriteEnergizer() {
		let favourites_array = localStorage.getItem("favourite");
		favourites_array = JSON.parse(favourites_array);
		return favourites_array.find((i) => i.id === +energizerId);
	}

	const handleDelete = async (e) => {
		e.preventDefault();
		// if the energizer is in the favourites alerts the user and asks to remove it from favourites
		if (findFavouriteEnergizer()) {
			alert(
				"Please remove the Energizer form your favourites before you delete this energizer"
			);
			return;
		}
		//fixed the alert, the alert now displays the name of the energizer to be removed
		alert(`You are deleting energizer: ${energizerName}`);
		try {
			setIsDeleting(true);
			const response = await fetch(`/api/energizers/${energizerId}`, {
				method: "DELETE",
			});
			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(errorText);
			}

			window.history.back();
		} catch (error) {
			console.error(error);
			alert("Failed to delete energizer");
		} finally {
			setIsDeleting(false);
		}
	};

	return (
		<form onSubmit={handleDelete}>
			<button type="submit" disabled={isDeleting}>
				{isDeleting ? "Deleting..." : "Delete"}
			</button>
		</form>
	);
}

export default EnergizerDeleteButton;
