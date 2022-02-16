import React from 'react';
import Board from './components/Board';
import './scss/App.scss'

// const cardImage = [
//     {"src": "/img/"}
// ]

const App = () => {
    return (
        <div className="App">
            <h1>WellBingo</h1>
            <Board/>
        </div>
    )
}

export default App;
