import * as React from "react";
import { Button, TextField } from "@mui/material";
import validateRegistrationForm from "../utils/ValidateRegistrationForm";
import { RegistrationFormType } from "../constants/Types";

interface RegistrationModalProps {
	closeModal: Function;
}

const RegistrationForm = (registrationModalProps: RegistrationModalProps) => {
	const { closeModal } = registrationModalProps;

	const [formData, setFormData] = React.useState<RegistrationFormType>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		phoneNumber: "",
	});

	const [formErrors, setFormErrors] = React.useState<RegistrationFormType>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		phoneNumber: "",
	});

	const validateForm = (): Boolean => {
		const formValidationErrors = validateRegistrationForm(formData);
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

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!validateForm()) return;

		// Perform form submission here
		closeModal();
	};

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				autoFocus
				margin="dense"
				label="First Name"
				type="text"
				fullWidth
				name="firstName"
				value={formData.firstName}
				onChange={handleChange}
				required
				error={!!formErrors.firstName}
				helperText={formErrors.firstName}
			/>
			<TextField
				margin="dense"
				label="Last Name"
				type="text"
				fullWidth
				name="lastName"
				value={formData.lastName}
				onChange={handleChange}
				required
				error={!!formErrors.lastName}
				helperText={formErrors.lastName}
			/>
			<TextField
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
				label="Phone Number"
				type="tel"
				fullWidth
				name="phoneNumber"
				value={formData.phoneNumber}
				onChange={handleChange}
				required
				error={!!formErrors.phoneNumber}
				helperText={formErrors.phoneNumber}
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
			<TextField
				margin="dense"
				label="Confirm Password"
				type="password"
				fullWidth
				name="confirmPassword"
				value={formData.confirmPassword}
				onChange={handleChange}
				required
				error={!!formErrors.confirmPassword}
				helperText={formErrors.confirmPassword}
			/>
			<Button
				type="submit"
				variant="contained"
				color="primary"
			>
				Register
			</Button>
		</form>
	);
};

export default RegistrationForm;
