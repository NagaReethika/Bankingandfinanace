import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // or './main.css' if you prefer to name it that way

// Create a root.
const root = createRoot(document.getElementById('root'));

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
