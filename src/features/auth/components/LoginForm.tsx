import * as React from "react";
import { Button, TextField } from "@mui/material";
import validateLoginForm from "../utils/ValidateLoginForm";
import { LoginFormType } from "../constants/FormConstants";

interface LoginModalProps {
	closeModal: Function;
}

const LoginForm = (loginModalProps: LoginModalProps) => {
	const { closeModal } = loginModalProps;

	const [formData, setFormData] = React.useState<LoginFormType>({
		email: "",
		password: "",
	});
	const [formErrors, setFormErrors] = React.useState<LoginFormType>({
		email: "",
		password: "",
	});

	const validateForm = (): Boolean => {
		const formValidationErrors = validateLoginForm(formData);
		if (Object.keys(formValidationErrors).length > 0) {
			setFormErrors(formValidationErrors);
			return false;
		}
		return true;
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
		setFormErrors({ ...formErrors, [event.target.name]: "" });
	};

	const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		if (validateForm()) return;

		closeModal();
	};

	return (
		<>
			<TextField
				autoFocus
				margin="dense"
				label="Email"
				type="email"
				fullWidth
				name="email"
				value={formData.email}
				onChange={handleChange}
				required
				error={!!formErrors.email}
				helperText={formErrors.email}
			/>
			<TextField
				margin="dense"
				label="Password"
				type="password"
				fullWidth
				name="password"
				value={formData.password}
				onChange={handleChange}
				required
				error={!!formErrors.password}
				helperText={formErrors.password}
			/>
			<Button
				type="submit"
				variant="contained"
				onClick={handleSubmit}
			>
				Login
			</Button>
		</>
	);
};

export default LoginForm;
