import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AuthContainer from "../features/auth/components/AuthContainer";

const Navbar = () => {
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

					<AuthContainer />
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
