import React from 'react';
import './SignInPage.scss';
import { Login } from '../Login/Login';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export const SignIn = () => {
    return (
        <div className="sign-in">
            <div className="title">
                <LockOpenIcon sx={{fontSize: 35}}/>
                <h2>Sign in to WellBingo</h2>
            </div>
            <Login />
        </div>
    )
}
