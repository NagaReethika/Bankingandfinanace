// src/App.js

import React from 'react';
import './App.css'; // Import your global styles
import Home from './Components/Home'; // Import the Home component
import About from './Components/About'; // Import the About component
import Contact from './Components/Contact'; // Import the Contact component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
      </header>
      <main>
        <Home />
        <About />
        <Contact />
      </main>
      <footer>
        <p>Footer content here</p>
      </footer>
    </div>
  );
}

export default App;
