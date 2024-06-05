import React from 'react';
import styles from '../styles/LoginPage.module.css';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.loginBox}>
				<h2>Login</h2>
				{LoginForm()}
				<div className={styles.registerLink}>
					Don't have an account?
					<Link to='/register'>Register here</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
