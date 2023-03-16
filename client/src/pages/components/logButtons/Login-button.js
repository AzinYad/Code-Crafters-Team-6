import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

export const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	const handleLogin = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: "/home",
			},
		});
	};

	return (
		<button className="login wrapper button__login" onClick={handleLogin}>
			<FaUserCircle className="login-icon" />
			Log In
		</button>
	);
};
