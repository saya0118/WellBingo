import React from 'react';
import Board from './components/Board';
import './scss/App.scss';
import { EditButton } from './components/EditIcon'

const App = () => {
    return (
        <div className="App">
            <h1>WellBingo</h1>
            <EditButton/>
            <Board/>
        </div>
    )
}

export default App;
