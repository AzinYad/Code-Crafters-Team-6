import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Energisers from "./pages/Energisers.js";
import EnergiserDetail from "./pages/EnergiserDetail";
import CreateEnergiser from "./pages/CreateEnergiser";
const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/home" element={<Home />} />
		<Route path="/energizers" element={<Energisers />} />
		<Route path="/energizers/:id" element={<EnergiserDetail />} />
		<Route path="/create-energizer" element={<CreateEnergiser />} />
	</Routes>
);
export default App;
