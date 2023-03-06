import React, { useState } from "react";

function EnergizerDeleteButton({ energizerId }) {
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDelete = async (e) => {
		e.preventDefault();
		alert("Do you want to delete this energizer?");
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
