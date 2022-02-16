import React from 'react';
import Card from './Card';
import '../scss/Board.scss'

const Board = (i) => {
    return (
        <div>
            <Card value={i}/>
        </div>
    )
}

export default Board;
