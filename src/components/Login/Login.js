import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

export const Login = () => {
  return (
    <form className="login-container">
      <fieldset className="input-container">
        <label>
        <TextField
          className="items input"
          required
          size="small"
          fullWidth
          id="outlined-required"
          label="Username"
          variant="outlined"
        />
        </label>
        <label>
        <TextField
          className="items input"
          required
          size="small"
          fullWidth
          id="outlined-required"
          label="Password"
          variant="outlined"
        />
        </label>
        <Link to="/home">
          <button className="items button">Log in</button>
        </Link>
        <div className="items link">
          <p>or</p>
          <a>Create an account</a>
        </div>
      </fieldset>
    </form>
  );
};
