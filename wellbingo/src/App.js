import React from 'react';
import Board from './components/Board';
import './scss/App.scss'
import EditIcon from '@mui/icons-material/Edit';

const App = () => {
    return (
        <div className="App">
            <h1>WellBingo</h1>
            <EditIcon/>
            <Board/>
        </div>
    )
}

export default App;
