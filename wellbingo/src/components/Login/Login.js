import React from 'react';
import './Login.scss';
import TextField from '@mui/material/TextField';

export const Login = () => {
    return (
        <div className="login-container">
            <div className="input-container">
                <TextField className="items" required size="small" fullWidth id="outlined-required" label="Username" variant="outlined" />
                <TextField className="items" required size="small" fullWidth id="outlined-required" label="Password" variant="outlined" />
                <button className="items button">Log in</button>
                <div className="items link">
                    <p>or</p>
                    <a>Create an account</a>
                </div>
            </div>
        </div>
    )
}
