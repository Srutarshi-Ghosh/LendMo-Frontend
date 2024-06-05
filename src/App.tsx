import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./layouts/HomePage";
import Layout from "./layouts/Layout";
import LoginPage from "./layouts/LoginPage";
import RegistrationPage from "./layouts/RegistrationPage";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Layout>
					<Routes>
						<Route
							path="/"
							element={<HomePage />}
						/>
						<Route
							path="/login"
							element={<LoginPage />}
						/>
						<Route
							path="/register"
							element={<RegistrationPage />}
						/>
					</Routes>
				</Layout>
			</div>
		</BrowserRouter>
	);
}

export default App;
