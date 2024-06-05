import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import LoginModal from "./LoginModal";

const Navbar = () => {
	const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => setShowModal(false);

	const loggedOutNav = () => {
		return (
			<div className={styles.navbar}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link
							to="/signup"
							className={styles.navLink}
						>
							Signup
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link
							to="/login"
							className={styles.navLink}
							onClick={() => setShowModal(true)}
						>
							Login
						</Link>
					</li>
				</ul>
			</div>
		);
	};

	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.navContainer}>
					<div className={styles.leftNavSection}>
						<div className={styles.navLogo}>
							<Link
								to="/"
								aria-label="HomePage"
							>
								<img
									className={styles.imgFluid}
									src="/_nuxt/Logo2.679479c7.svg"
									alt="IndiaP2P Website Logo"
								/>
							</Link>
						</div>
					</div>
					<div className={styles.rightNavSection}>{loggedOutNav()}</div>
				</div>
			</div>
			{showModal && <LoginModal closeModal={closeModal} />}
		</>
	);
};

export default Navbar;
