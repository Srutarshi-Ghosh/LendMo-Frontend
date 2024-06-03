import React from "react";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./layouts/HomePage";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Navbar />
					<Homepage />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
