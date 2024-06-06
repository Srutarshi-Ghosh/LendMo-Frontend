import React, { useState } from 'react';
import styles from '../styles/LoginForm.module.css';
import { Button, TextField } from '@mui/material';

const LoginForm = () => {
	const [loginFormData, setLoginFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		const { name, value } = event.target as HTMLInputElement;
		setLoginFormData({ ...loginFormData, [name]: value });
	};

	return (
		<form className={styles.form}>
			<TextField
				required
				autoFocus
				variant='outlined'
				margin='normal'
				id='email'
				label='Email Address'
				type='email'
				name='email'
				autoComplete='email'
				value={loginFormData.email}
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
				InputLabelProps={{shrink: true}}
				autoComplete='current-password'
				value={loginFormData.password}
				onChange={(event) => handleChange(event)}
			/>
			<Button
				type='submit'
				variant='contained'
				color='primary'
				sx={{ mt: 3, mb: 2 }}

			>
				Login
			</Button>
		</form>
	);
};

export default LoginForm;
