import React from 'react';
import styles from '../styles/LoginPage.module.css';
import { Link } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.loginBox}>
				<h2>Login</h2>
				{RegistrationForm()}
				<div className={styles.registerLink}>
					Already have an account?
					<Link to='/login'>Login here</Link>
				</div>
			</div>
		</div>
	);
};

export default RegistrationPage;
