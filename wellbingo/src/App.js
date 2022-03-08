import React from 'react';
import { BrowserRouter as Routes, Router, Route, Link } from "react-router-dom";
import Board from './components/Board';
import { EditButton } from './components/EditIcon';
import { EditPage } from './components/EditPage'
import './scss/App.scss';

const App = () => {
    return (
        <Router>
            <Routes>
                <div className="App">
                    <h1>WellBingo</h1>
                    <Route path="/">
                        <EditButton/>
                        <Board/>
                    </Route>
                    <Route path="/EditPage">
                        <EditPage/>
                    </Route>
                </div>

            </Routes>
        </Router>
    )
}

export default App;
