import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }) => {
	const navigate = useNavigate();
	//had to expose these variables as for some reason process.env was breaking the application
	const domain = "dev-fu5absjxigoax8c0.eu.auth0.com";
	const clientId = "UI70osn3wvcwyWz1xLppvrgVLpiU6TCE";
	//const redirectUri = window.location.origin //process.env.REACT_APP_AUTH0_CALLBACK_URL || "http://localhost:3000";

	const onRedirectCallback = (appState) => {
		navigate(appState?.returnTo || window.location.pathname);
	};

	if (!(domain && clientId)) {
		return null;
	}

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</Auth0Provider>
	);
};
