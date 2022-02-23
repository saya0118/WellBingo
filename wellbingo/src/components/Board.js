import React, {useState, useContext} from 'react';
import Card from './Card';
import '../scss/Board.scss'

const cardContent = [
    {text: "drink 1L water"},
    {text: "go for a walk"},
    {text: "soak in sunshine"},
    {text: "read a book"},
    {text: "admire a friend"},
    {text: "tell someone your gratitude"},
    {text: "study 30min"},
    {text: "see new people"},
    {text: "do yoga"}
]

const cardContext = React.createContext(cardContent)

const Board = () => {
    const [cards, setCards] = useState([])

    // const handleChoice = (card) => {
    // }

    return (
        <div className="board">
            {cards.map(card => (
                <Card 
                key={card.id}
                // card={card}
                // handleChoice={handleChoice}
                />
            ))}
        </div>
    )
}

export default Board;
