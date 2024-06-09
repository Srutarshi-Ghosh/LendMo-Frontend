import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./layouts/HomePage";
import Layout from "./layouts/Layout";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./Theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<div className="App">
					<Layout>
						<Routes>
							<Route
								path="/"
								element={<HomePage />}
							/>
						</Routes>
					</Layout>
				</div>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
