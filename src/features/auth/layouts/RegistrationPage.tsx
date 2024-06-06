import React from 'react';
import styles from '../styles/RegistrationPage.module.css';
import { Link } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';
import { Container, Box, Typography } from '@mui/material';

const RegistrationPage = () => {
	return (
		<Container maxWidth='xs'>
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
				sx={{ mt: 4, boxShadow:' 0 4px 8px rgba(0, 0, 0, 0.1)'}}
			>
				<Typography
					variant='h4'
					component='h1'
					gutterBottom
				>
					Register
				</Typography>
				{/* {RegistrationForm()} */}
				<div className={styles.registerLink}>
					Already have an account?
					<Link to='/login'>Login here</Link>
				</div>
			</Box>
		</Container>
	);
};

export default RegistrationPage;
