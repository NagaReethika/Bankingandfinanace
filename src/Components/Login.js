import React from "react";
import "./Login.css";

function Login({ formValues, handleChange, handleSubmit, formErrors }) {
  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && formValues.isSubmit ? (
        <div className="ui message success">Logged in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row">
          <h1>Login Form</h1>
          <div className="col">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.username}</p>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <input type="submit" value="Login" />
          </div>

          <div className="col">
            <div className="vl">
              <span className="vl-innertext">or</span>
            </div>

            <div className="social-container">
              <button className="btn fb">Login with Facebook</button>
              <button className="btn twitter">Login with Twitter</button>
              <button className="btn google">Login with Google</button>
            </div>
          </div>
        </div>
      </form>

      <div className="bottom-container">
        <div>
          <a href="#" className="btn">Sign up</a>
          <a href="#" className="btn">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
