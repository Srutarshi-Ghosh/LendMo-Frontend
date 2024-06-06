import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

interface LoginFormData {
	email: string;
	password: string;
}

interface LoginModalProps {
	open: boolean;
	onClose: Function;
	onSubmit: Function;
}

const LoginModal = (loginModalProps: LoginModalProps) => {
	const { open, onClose, onSubmit } = loginModalProps;
	const closeModal = () => onClose();

	const [formData, setFormData] = React.useState({
		email: '',
		password: '',
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
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
			onClose={closeModal}
		>
			<DialogTitle>Login</DialogTitle>
			<DialogContent>
				<DialogContentText>Please enter your email and password to login.</DialogContentText>
				<TextField
					autoFocus
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
			</DialogContent>
			<DialogActions>
				<Button onClick={closeModal}>Cancel</Button>
				<form onSubmit={handleSubmit}>
					<Button
						type='submit'
						variant='contained'
					>
						Login
					</Button>
				</form>
			</DialogActions>
		</Dialog>
	);
};

export default LoginModal;
