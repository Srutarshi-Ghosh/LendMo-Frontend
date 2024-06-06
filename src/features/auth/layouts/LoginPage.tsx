import React from 'react';
import styles from '../styles/LoginPage.module.css';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { Box, Container, Typography } from '@mui/material';

const LoginPage = () => {
	return (
		<Container maxWidth='xs'>
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
				sx={{mt: 4}}
			>
				<Typography variant='h4' component='h1' gutterBottom>
					Login
				</Typography>
				{LoginForm()}
				<div className={styles.registerLink}>
					Don't have an account?
					<Link to='/register'>Register here</Link>
				</div>
			</Box>
		</Container>
	);
};

export default LoginPage;
