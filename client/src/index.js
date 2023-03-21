import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
import App from "./App";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Auth0ProviderWithNavigate>
			<App />
		</Auth0ProviderWithNavigate>
	</BrowserRouter>
);
