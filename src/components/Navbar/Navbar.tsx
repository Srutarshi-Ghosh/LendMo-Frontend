import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";


const Navbar = () => {

	const loggedIn = useSelector((state: RootState) => state.auth.isAuthenticated)
	const [showModal, setShowModal] = useState(true)

	return (
		<div className={styles.navbar}>
			<div className={styles["nav-container"]}>
				<div className={styles["left-nav-section"]}>
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
				<div className={styles["right-nav-section"]}>
					<div className={styles.navbar}>
						<ul className={styles["nav-list"]}>
							<li className={styles["nav-item"]}>
								<a
									href="/signup"
									className={styles["nav-link"]}
								>
									Signup
								</a>
							</li>
							<li className={styles["nav-item"]}>
								<a
									href="/login"
									className={styles["nav-link"]}
								>
									Login
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
