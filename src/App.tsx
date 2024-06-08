import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./layouts/HomePage";
import Layout from "./layouts/Layout";

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
					</Routes>
				</Layout>
			</div>
		</BrowserRouter>
	);
}

export default App;
