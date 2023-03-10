import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	let pageNumbers = [];
	function isPositiveInteger(n) {
		return n >>> 0 === parseFloat(n);
	}
	//validating that postsPerPage is a positive integer greater than 0
	if (!isPositiveInteger(postsPerPage) || postsPerPage == 0) {
		alert("get in touch with the webadmin, this page needs attention");
		postsPerPage = 1;
		console.log("postPerPage is not a positive integer greater than 0");
	}
	const numberOfPages = Math.ceil(totalPosts / postsPerPage);

	for (let i = 1; i <= numberOfPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className="pagination">
				{pageNumbers.map((number) => (
					<li key={number} className="page-item">
						<button
							onClick={(e) => {
								e.preventDefault;
								paginate(number);
							}}
							className="page-link"
						>
							{number}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
