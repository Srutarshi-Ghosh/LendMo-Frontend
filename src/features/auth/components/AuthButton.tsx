import React from "react";
import { Button } from "@mui/material";
import { AuthType } from "../constants/AuthConstants";

interface AuthButtonProps {
	authType: AuthType.Login | AuthType.Registration;
	modalOpen: Function;
}

const AuthButton = (authButtonProps: AuthButtonProps) => {
	const { authType, modalOpen } = authButtonProps;
	const authButtonText = authType === AuthType.Login ? "Login" : "Register";

	return (
		<Button
			color="inherit"
			onClick={() => modalOpen()}
		>
			{authButtonText}
		</Button>
	);
};
export default AuthButton;
