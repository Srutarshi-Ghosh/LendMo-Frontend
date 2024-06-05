import React, { useState } from 'react';
import styles from '../styles/RegistrationForm.module.css';

const RegistrationForm = () => {
	const [registrationFormData, setRegistrationFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
		const { name, value } = event.target as HTMLInputElement;
		setRegistrationFormData({ ...registrationFormData, [name]: value });
	};

	return (
		<form>
			<div className={styles.inputGroup}>
				<label>First Name</label>
				<input
					type='text'
					name='firstName'
					placeholder='Enter First Name'
					onChange={handleChange}
				/>
			</div>
			<div className={styles.inputGroup}>
				<label>Last Name</label>
				<input
					type='text'
					name='lastName'
					placeholder='Enter Last Name'
					onChange={handleChange}
				/>
			</div>
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
			<div className={styles.inputGroup}>
				<label>Confirm Password</label>
				<input
					type='password'
					name='confirmPassword'
					placeholder='Confirm Password'
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

export default RegistrationForm;
