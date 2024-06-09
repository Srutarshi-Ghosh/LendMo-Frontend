import * as React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal } from "@mui/material";
import { AuthType } from "../constants/AuthConstants";
import getAuthModalValues from "../utils/GetAuthModalValues";
interface AuthModalProps {
	closeModal: Function;
	authType: AuthType;
}

const AuthModal = (authModalProps: AuthModalProps) => {
	const { closeModal, authType } = authModalProps;

	const openModal = authType !== AuthType.None;

	const { title, dialogue, formElement } = getAuthModalValues(authType, closeModal);

	return (
		<Modal
			open={openModal}
			onClose={() => closeModal()}
		>
			<Dialog
				open={openModal}
				onClose={() => closeModal()}
			>
				<DialogTitle>{title}</DialogTitle>
				<DialogContent>
					<DialogContentText>{dialogue}</DialogContentText>
					{formElement}
				</DialogContent>
				<DialogActions>
					<Button onClick={() => closeModal()}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</Modal>
	);
};

export default AuthModal;
