import React from 'react';
import { BrowserRouter as Routes, Router, Route} from "react-router-dom";
import { Home } from '../Home/Home'
import { EditPage } from '../EditPage/EditPage'
import './scss/App.scss';

const App = () => {
    return (
        <div className="App">   
            <Router>
                <Routes>
                    <Route path="/">
                        <Home/>
                    </Route>
                    <Route path="/edit-page">
                        <EditPage/>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
