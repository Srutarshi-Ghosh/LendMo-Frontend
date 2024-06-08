import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "../features/auth/components/AuthModal";
import { AppBar, Box, Button, IconButton, Modal, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [authType, setAuthType] = useState<string>("");

	const handleLoginModalOpen = () => {
		setIsModalOpen(true);
		setAuthType("login");
	};

	const handleRegistrationModalOpen = () => {
		setIsModalOpen(true);
		setAuthType("register");
	};

	const closeModal = () => setIsModalOpen(false);

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					></IconButton>
					<Typography
						variant="h6"
						component={Link}
						to="/"
						sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
					>
						Your Logo
					</Typography>
					<Box sx={{ display: "flex" }}>
						<Button
							color="inherit"
							onClick={handleLoginModalOpen}
						>
							Login
						</Button>
						<Button
							color="inherit"
							onClick={handleRegistrationModalOpen}
						>
							Register
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
			<Modal
				open={isModalOpen}
				onClose={closeModal}
			>
				<AuthModal
					open={isModalOpen}
					closeModal={closeModal}
					authType={authType}
				/>
			</Modal>
		</>
	);
};

export default Navbar;
