import React, { useState } from 'react';
import styles from '../styles/LoginForm.module.css';

const LoginForm = () => {
	const [loginFormData, setLoginFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
		const { name, value } = event.target as HTMLInputElement;
		setLoginFormData({ ...loginFormData, [name]: value });
	};

	return (
		<form>
			<div className={styles.inputGroup}>
				<label>Email</label>
				<input
					type='text'
					name='email'
					placeholder='Enter Email'
					onChange={handleChange}
				/>
			</div>
			<div className={styles.inputGroup}>
				<label>Password</label>
				<input
					type='password'
					name='password'
					placeholder='Enter Password'
					onChange={handleChange}
				/>
			</div>
			<button
				type='submit'
				className={styles.submitButton}
			>
				Submit
			</button>
		</form>
	);
};

export default LoginForm;
