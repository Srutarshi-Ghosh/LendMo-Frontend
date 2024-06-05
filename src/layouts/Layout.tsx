import React from "react";
import styles from '../styles/Layout.module.css'
import Navbar from "../components/Navbar";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navbar />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
