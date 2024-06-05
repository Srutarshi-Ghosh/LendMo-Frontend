import React from 'react';
import styles from '../styles/LoginForm.module.css'

const loginForm = () => {
	return (
		<form>
			<div className={styles.inputGroup}>
				<label>Username</label>
				<input
					type='text'
					placeholder='Enter username'
				/>
			</div>
			<div className={styles.inputGroup}>
				<label>Password</label>
				<input
					type='password'
					placeholder='Enter password'
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

export default loginForm;
