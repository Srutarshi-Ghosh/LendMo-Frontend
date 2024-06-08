import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "../features/auth/components/AuthModal";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { AuthType } from "../features/auth/constants/AuthConstants";

const Navbar = () => {
	const [authType, setAuthType] = useState<AuthType>(AuthType.None);

	const handleLoginModalOpen = () => {
		setAuthType(AuthType.Login);
	};

	const handleRegistrationModalOpen = () => {
		setAuthType(AuthType.Registration);
	};

	const closeModal = () => setAuthType(AuthType.None);

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

			<AuthModal
				closeModal={closeModal}
				authType={authType}
			/>
		</>
	);
};

export default Navbar;
