import React, {useState} from 'react';
import Card from './Card';
import '../scss/Board.scss'

const Board = () => {

    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }
    return (
        <div>
            <Card/>
        </div>
    )
}

export default Board;
