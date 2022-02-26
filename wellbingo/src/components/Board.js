import React, {useState, useEffect} from 'react';
import Card from './Card';
import '../scss/Board.scss'


const Board = () => {
    const [cards, setCards] = useState(false);
    const [horizontalRow, setHorizontalRow] = useState([]);
    const [verticalRow, setVerticalRow] = useState([]);


    useEffect(() => {

    }, )
    
    const cardContent = [
        {text: "drink 1L water"},
        {text: "go for a walk"},
        {text: "soak in sunshine"},
        {text: "read a book"},
        {text: "admire a friend"},
        {text: "tell someone of your gratitude"},
        {text: "study 30min"},
        {text: "meet new people"},
        {text: "do yoga"}
    ]

    return (
        <div className="board">
            {cards.map((card, i) => (
                <Card 
                key={i}
                text={cardContent.text(i)}
                />
            ))}
        </div>
    )
}

export default Board;
