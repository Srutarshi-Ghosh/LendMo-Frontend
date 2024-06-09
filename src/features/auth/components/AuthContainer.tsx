import React, { useState } from "react";
import { Box } from "@mui/material";
import { AuthType } from "../constants/AuthConstants";
import AuthButton from "./AuthButton";
import AuthModal from "./AuthModal";

const AuthContainer = () => {
	const [authType, setAuthType] = useState<AuthType>(AuthType.None);

	const loginModalOpen = () => setAuthType(AuthType.Login);
	const registrationModalOpen = () => setAuthType(AuthType.Registration);
	const closeModal = () => setAuthType(AuthType.None);

	return (
		<Box sx={{ display: "flex" }}>
			<AuthButton
				authType={AuthType.Login}
				modalOpen={loginModalOpen}
			/>
			<AuthButton
				authType={AuthType.Registration}
				modalOpen={registrationModalOpen}
			/>

			<AuthModal
				closeModal={closeModal}
				authType={authType}
			/>
		</Box>
	);
};

export default AuthContainer;
