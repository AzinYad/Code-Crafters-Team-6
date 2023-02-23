import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Energisers from "./pages/Energisers.js";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/home" element={<Home />} />
		<Route path="/energisers" element={<Energisers />} />
	</Routes>
);

export default App;
