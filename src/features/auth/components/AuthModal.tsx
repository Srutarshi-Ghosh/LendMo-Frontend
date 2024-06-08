import * as React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
interface AuthModalProps {
	open: boolean;
	closeModal: Function;
	authType?: string;
}

const AuthModal = (authModalProps: AuthModalProps) => {
	const { open, closeModal, authType } = authModalProps;
	const isLoginForm = authType === "login";

	return (
		<Dialog
			open={open}
			onClose={() => closeModal()}
		>
			<DialogTitle>{isLoginForm ? "Login" : "Register"}</DialogTitle>
			<DialogContent>
				<DialogContentText>{isLoginForm ? "Please enter your email and password to login." : "Please fill in your details to create an account."}</DialogContentText>
				{authType === "login" ? (
					<LoginForm closeModal={closeModal} /> // Use LoginForm component
				) : (
					<RegistrationForm closeModal={closeModal} /> // Use RegistrationForm component
				)}
			</DialogContent>
			<DialogActions>
				<Button onClick={() => closeModal()}>Cancel</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AuthModal;
