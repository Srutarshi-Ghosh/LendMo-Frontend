import React from "react";
import styles from "../styles/Layout.module.css";
import Navbar from "../components/Navbar";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Navbar />
			<div className={styles.main}>{children}</div>
		</div>
	);
};

export default Layout;
