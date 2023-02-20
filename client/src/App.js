import { Route, Routes } from "react-router-dom";
import Energisers from "./pages/Energisers";
import CreateEnergiser from "./pages/Create Energiser";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SingleEnergiser from "./components/SingleEnegiser";




const App = () => {


	return(
		<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about/this/site" element={<CreateEnergiser />} />
					<Route path="/about/this/site" element={<Energisers />} />
				</Routes>
				<h1>My Energisers Video</h1>
				<SingleEnergiser  id={1} />
			</div>
	);
	};

export default App;
