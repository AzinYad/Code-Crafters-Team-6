// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";


import Card from "../commponet/Card";

export function Home() {
	// const [message, setMessage] = useState("Loading...");

	// useEffect(() => {
	// 	fetch("/api")
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error(res.statusText);
	// 			}
	// 			return res.json();
	// 		})
	// 		.then((body) => {
	// 			setMessage(body.message);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }, []);

	return (
		// <main role="main">
			<div>
{/* <Card /> */}

{/* <img
className="logo"
data-qa="logo"
src={logo}

					alt="Just the React logo"
				/>
				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/about/this/site">About</Link> */}
				{/* <FirstPage /> */}
				<Card />
			</div>
		// </main>
	);
}

export default Home;
