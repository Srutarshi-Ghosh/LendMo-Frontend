import * as React from 'react';
import { Button, TextField } from '@mui/material';

interface RegistrationFormProps {
	onSubmit: (data: {
		firstName: string;
		lastName: string;
		email: string;
		password: string;
		confirmPassword: string;
	}) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
	const [formData, setFormData] = React.useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		event.preventDefault();
		// Perform form validation here (optional)
		onSubmit(formData);
	};

	return (
		<>
			<TextField
				autoFocus
				margin='dense'
				label='First Name'
				type='text'
				fullWidth
				name='firstName'
				value={formData.firstName}
				onChange={(event) => handleChange(event)}
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
			<Button
				type='submit'
				variant='contained'
				onClick={(event) => handleSubmit(event)}
			>
				Register
			</Button>
		</>
	);
};

export default RegistrationForm;
