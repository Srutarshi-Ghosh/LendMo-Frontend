import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationModal: React.FC<{
	open: boolean;
	onClose: () => void;
	onSubmit: (data: RegistrationFormData) => void;
}> = ({ open, onClose, onSubmit }) => {
	const [formData, setFormData] = React.useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		// Perform form validation here (optional)
		onSubmit(formData);
	};

	return (
		<Dialog
			open={open}
			onClose={onClose}
		>
			<DialogTitle>Register</DialogTitle>
			<DialogContent>
				<DialogContentText>Please fill in your details to create an account.</DialogContentText>
				<TextField
					autoFocus
					margin='dense'
					label='First Name'
					type='text'
					fullWidth
					name='firstName'
					value={formData.firstName}
					onChange={handleChange}
					required
				/>
				<TextField
					margin='dense'
					label='Last Name'
					type='text'
					fullWidth
					name='lastName'
					value={formData.lastName}
					onChange={handleChange}
					required
				/>
				<TextField
					margin='dense'
					label='Email'
					type='email'
					fullWidth
					name='email'
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<TextField
					margin='dense'
					label='Password'
					type='password'
					fullWidth
					name='password'
					value={formData.password}
					onChange={handleChange}
					required
				/>
				<TextField
					margin='dense'
					label='Confirm Password'
					type='password'
					fullWidth
					name='confirmPassword'
					value={formData.confirmPassword}
					onChange={handleChange}
					required
					error={formData.confirmPassword !== formData.password}
					helperText={formData.confirmPassword !== formData.password ? "Passwords don't match" : ''}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
				<form onSubmit={handleSubmit}>
					<Button
						// onClick={(event) => handleSubmit(event)}
						type='submit'
						variant='contained'
					>
						Register
					</Button>
				</form>
			</DialogActions>
		</Dialog>
	);
};

export default RegistrationModal;
