import React from 'react';
import '../Styles/Login.css';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    
  };

  return (
    <div className="main">
      <h1>GeeksforGeeks</h1>
      <h3>Enter your login credentials</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">Username:</label>
        <input
          type="text"
          id="first"
          name="first"
          placeholder="Enter your Username"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your Password"
          required
        />

        <div className="wrap">
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>
        Not registered?{' '}
        <a href="#" style={{ textDecoration: 'none' }}>
          Create an account
        </a>
      </p>
    </div>
  );
};

export default Login;
