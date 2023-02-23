import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EnergiserDetail from "./pages/EnergiserDetail.js";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/energiser-detail" element={<EnergiserDetail />} />
	</Routes>
);

export default App;
