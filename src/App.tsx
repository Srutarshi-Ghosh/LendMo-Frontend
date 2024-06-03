import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './layouts/HomePage';

function App() {
  return (
    <div className="App">
			<Navbar />
      <Homepage />
    </div>
  );
}

export default App;
