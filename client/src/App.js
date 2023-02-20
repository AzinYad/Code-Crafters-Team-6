import { Route, Routes } from "react-router-dom";

// import About from "./pages/About";

import Home from "./pages/Home";

const App = () => (
	<Routes>
		<Route path="/home" element={<Home />} />
	</Routes>
);

export default App;
