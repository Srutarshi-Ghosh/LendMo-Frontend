import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import AuthModal from '../features/auth/components/AuthModal'; // Import AuthModal
import { Modal } from '@mui/material';

interface AuthModalProps {
	open: boolean;
	onClose: () => void;
	onSubmit: (data: any) => void; // Simplified data type for now
}

const Navbar: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [authType, setAuthType] = useState<'login' | 'register'>('login'); // Default to login

	const handleLoginModalOpen = () => {
		setIsModalOpen(true);
		setAuthType('login');
	};

	const handleRegistrationModalOpen = () => {
		setIsModalOpen(true);
		setAuthType('register');
	};

	const handleModalClose = () => setIsModalOpen(false);

	const handleAuthSubmit = (data: any) => {
		// Implement logic to handle login/registration data (optional)
		console.log('Auth data submitted:', data);
		setIsModalOpen(false);
	};

	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.navContainer}>
					<div className={styles.leftNavSection}>
						<div className={styles.navLogo}>
							<Link
								to='/'
								aria-label='HomePage'
							>
								{/* Your logo here */}
							</Link>
						</div>
					</div>
					<div className={styles.rightNavSection}>
						<li className={styles.navItem}>
							<button
								className={styles.navLink}
								onClick={handleLoginModalOpen}
							>
								Login
							</button>
						</li>
						<li className={styles.navItem}>
							<button
								className={styles.navLink}
								onClick={handleRegistrationModalOpen}
							>
								Register
							</button>
						</li>
					</div>
				</div>
			</div>
			<Modal
				open={isModalOpen}
				onClose={handleModalClose}
			>
				<AuthModal
					open={isModalOpen}
					onClose={handleModalClose}
					onSubmit={handleAuthSubmit}
					authType={authType} // Pass authType to AuthModal
				/>
			</Modal>
		</>
	);
};

export default Navbar;
