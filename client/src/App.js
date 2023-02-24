import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Energisers from "./pages/Energisers.js";
import EnergiserDetail from "./pages/EnergiserDetail";

const App = () => (
	<Routes>
		<Route path="/home" element={<Home />} />
		<Route path="/energiser-detail/:id" element={<EnergiserDetail />} />
		<Route path="/energisers" element={<Energisers />} />
	</Routes>
);
export default App;
