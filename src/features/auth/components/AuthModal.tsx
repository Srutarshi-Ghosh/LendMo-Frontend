import * as React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal } from "@mui/material";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { AuthType } from "../constants/AuthConstants";
interface AuthModalProps {
	closeModal: Function;
	authType: AuthType;
}

const AuthModal = (authModalProps: AuthModalProps) => {
	const { closeModal, authType } = authModalProps;

	const openModal = authType !== AuthType.None;

	const loginDialogue = "Please enter your email and password to login.";
	const registrationDialogue = "Please fill in your details to create an account.";

	let modalDialogue = "";
	let modalTitle = "";
	let modalFormElement = null;

	const getAuthModalValues = () => {
		switch (authType) {
			case AuthType.Login:
				modalDialogue = loginDialogue;
				modalTitle = "Login";
				modalFormElement = <LoginForm closeModal={closeModal} />;
				break;
			case AuthType.Registration:
				modalDialogue = registrationDialogue;
				modalTitle = "Register";
				modalFormElement = <RegistrationForm closeModal={closeModal} />;
				break;
		}
	};

	getAuthModalValues();

	return (
		<Modal
			open={openModal}
			onClose={() => closeModal()}
		>
			<Dialog
				open={openModal}
				onClose={() => closeModal()}
			>
				<DialogTitle>{modalTitle}</DialogTitle>
				<DialogContent>
					<DialogContentText>{modalDialogue}</DialogContentText>
					{modalFormElement}
				</DialogContent>
				<DialogActions>
					<Button onClick={() => closeModal()}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</Modal>
	);
};

export default AuthModal;
