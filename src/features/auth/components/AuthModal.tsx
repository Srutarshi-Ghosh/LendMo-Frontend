import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import LoginForm from './LoginForm'; // Import LoginForm
import RegistrationForm from './RegistrationForm'; // Import RegistrationForm

interface AuthFormData {
	email?: string;
	password?: string;
	firstName?: string;
	lastName?: string;
	confirmPassword?: string;
}

type AuthFormType = 'login' | 'register';

const AuthModal: React.FC<{
	open: boolean;
	onClose: () => void;
	onSubmit: (data: AuthFormData) => void;
	authType?: AuthFormType; // Optional prop to specify login or registration
}> = ({ open, onClose, onSubmit, authType = 'login' }) => {
	const isLoginForm = authType === 'login';

	return (
		<Dialog
			open={open}
			onClose={onClose}
		>
			<DialogTitle>{isLoginForm ? 'Login' : 'Register'}</DialogTitle>
			<DialogContent>
				<DialogContentText>
					{isLoginForm
						? 'Please enter your email and password to login.'
						: 'Please fill in your details to create an account.'}
				</DialogContentText>
				{isLoginForm ? (
					<LoginForm onSubmit={onSubmit} /> // Use LoginForm component
				) : (
					<RegistrationForm onSubmit={onSubmit} /> // Use RegistrationForm component
				)}
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AuthModal;
