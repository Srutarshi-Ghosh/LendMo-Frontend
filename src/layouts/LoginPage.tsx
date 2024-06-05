import React from 'react';
import styles from '../styles/LoginPage.module.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.loginBox}>
				<h2>Login</h2>
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
				<div className={styles.registerLink}>
					Don't have an account?
					<Link to='/register'>Register here</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
