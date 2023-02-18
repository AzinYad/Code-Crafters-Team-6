import { Route, Routes } from "react-router-dom";

// import About from "./pages/About";
import CreateEnergiser from "./pages/CreateEnergiser.js";
import Energisers from "./pages/Energisers.js";
import EnergiserDetail from "./pages/EnergiserDetail.js";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp.js";
import Login from "./pages/Login.js";

const App = () => (
	<Routes>
		<Route path="/home" element={<Home />} />
		<Route path="/create-energiser" element={<CreateEnergiser />} />
		<Route path="/energisers" element={<Energisers />} />
		<Route path="/energiser-detail" element={<EnergiserDetail />} />
		<Route path="/login" element={<Login />} />
		<Route path="/signup" element={<SignUp />} />
	</Routes>
);

export default App;
