import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
	</Routes>
);

export default App;
