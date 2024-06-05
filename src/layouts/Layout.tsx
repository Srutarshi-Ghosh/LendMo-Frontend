import React from "react";
import styles from "../styles/Layout.module.css";
import Navbar from "../components/Navbar";

interface LayoutProps {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Navbar />
			<main className={styles.main}>{children}</main>
		</div>
	);
};

export default Layout;
