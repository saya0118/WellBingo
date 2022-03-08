import React from 'react';
import { BrowserRouter, Routes, Router, Route} from "react-router-dom";
import { SignIn } from '../SignIn/SignIn';
import { Home } from '../Home/Home';
import { EditPage } from '../EditPage/EditPage';
import './App.scss';

const App = () => {
    return (
        <div className="App">   
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/edit-page" element={<EditPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
