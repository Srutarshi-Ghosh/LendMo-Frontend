import React, { useState } from 'react';
import styles from '../styles/RegistrationForm.module.css';
import { TextField, Button } from '@mui/material';

const RegistrationForm = () => {
	const [registrationFormData, setRegistrationFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const { firstName, lastName, email, password, confirmPassword } = registrationFormData;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		const { name, value } = event.target as HTMLInputElement;
		setRegistrationFormData({ ...registrationFormData, [name]: value });
	};

	return (
		<form style={{ display: 'flex', flexDirection: 'column' }}>
			<TextField
				required
				autoFocus
				variant='outlined'
				margin='normal'
				id='firstName'
				label='First Name'
				InputLabelProps={{ shrink: !!firstName }}
				name='firstName'
				value={firstName}
				onChange={(event) => handleChange(event)}
			/>
			<TextField
				required
				variant='outlined'
				margin='normal'
				id='lastName'
				label='Last Name'
				InputLabelProps={{ shrink: !!lastName }}
				name='lastName'
				autoComplete='lastName'
				value={lastName}
				onChange={(event) => handleChange(event)}
			/>
			<TextField
				required
				variant='outlined'
				margin='normal'
				id='email'
				label='Email Address'
				InputLabelProps={{ shrink: true }}
				type='email'
				name='email'
				autoComplete='email'
				value={email}
				onChange={(event) => handleChange(event)}
			/>
			<TextField
				required
				variant='outlined'
				margin='normal'
				id='password'
				label='Password'
				type='password'
				name='password'
				InputLabelProps={{ shrink: true }}
				autoComplete='current-password'
				value={registrationFormData.password}
				onChange={(event) => handleChange(event)}
			/>
			<TextField
				required
				variant='outlined'
				margin='normal'
				id='confirmPassword'
				label='Confirm Password'
				type='password'
				name='password'
				InputLabelProps={{ shrink: !!confirmPassword }}
				autoComplete='current-password'
				value={registrationFormData.confirmPassword}
				onChange={(event) => handleChange(event)}
			/>
			<Button
				type='submit'
				variant='contained'
				color='primary'
				sx={{ mt: 3, mb: 2 }}
			>
				Register
			</Button>
		</form>
	);
};

export default RegistrationForm;
