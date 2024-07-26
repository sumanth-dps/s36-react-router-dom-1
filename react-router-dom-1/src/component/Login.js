import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="App">
      <form>
        <div>
          <h2>Login</h2>
        </div>
        <div>
          <label>email</label>
          <input></input>
        </div>
        <div>
          <label>password</label>
          <input></input>
        </div>
        <div>
          <button type="button">Login</button>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Login;
