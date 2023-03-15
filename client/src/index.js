import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
//import { Auth0Provider } from "@auth0/auth0-react";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Auth0ProviderWithNavigate>
			<App />
		</Auth0ProviderWithNavigate>
	</BrowserRouter>
);
