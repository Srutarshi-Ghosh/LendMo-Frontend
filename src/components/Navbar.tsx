import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import RegistrationModal from '../features/auth/components/RegistrationModal';

const Navbar = () => {
	const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

	const handleRegistrationModalOpen = () => setIsRegistrationModalOpen(true);
	const handleRegistrationModalClose = () => setIsRegistrationModalOpen(false);

	const loggedOutNav = () => (
		<div className={styles.navList}>
			<li className={styles.navItem}>
				<button
					className={styles.navLink}
					onClick={handleRegistrationModalOpen}
				>
					Register
				</button>
			</li>
			<li className={styles.navItem}>
				<Link
					to='/login'
					className={styles.navLink}
				>
					Login
				</Link>
			</li>
		</div>
	);

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
								<img
									className={styles.imgFluid}
									src='/_nuxt/Logo2.679479c7.svg'
									alt='IndiaP2P Website Logo'
								/>
							</Link>
						</div>
					</div>
					<div className={styles.rightNavSection}>{loggedOutNav()}</div>
				</div>
			</div>
			<RegistrationModal
				open={isRegistrationModalOpen}
				onClose={handleRegistrationModalClose}
				onSubmit={(data) => {}}
			/>
		</>
	);
};

export default Navbar;
