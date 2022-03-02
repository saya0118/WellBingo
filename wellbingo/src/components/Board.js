import React, {useState, useEffect} from 'react';
import Card from './Card';
import '../scss/Board.scss'


const Board = () => {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState(false);
    // const [horizontalRow, setHorizontalRow] = useState([]);
    // const [verticalRow, setVerticalRow] = useState([]);

    useEffect(() => {
        const cardsList = [
            [
                {
                    id: 0,
                    text: "drink 1L water",
                    flipped: false
                },
                {
                    id: 1,
                    text: "tell someone of your gratitude",
                    flipped: false
                },
                {
                    id: 2,
                    text: "go for a walk",
                    flipped: false
                }
            ],
            [
                {
                    id: 0,
                    text: "soak in sunshine",
                    flipped: false
                },
                {
                    id: 1,
                    text: "read a book",
                    flipped: false
                },
                {
                    id: 2,
                    text: "admire a friend",
                    flipped: false
                }
            ],
            [
                {
                    id: 0,
                    text: "study 30min",
                    flipped: false
                },
                {
                    id: 1,
                    text: "meet new people",
                    flipped: false
                },
                {
                    id: 2,
                    text: "do yoga",
                    flipped: false
                }
            ]
        ]

    }, )

    const toggleFlipped = (index) => {
        // setFlipped(index);
        // const cardItem = cards[index];
        // setCards(!flipped)
        setFlipped(!flipped)
        console.log(flipped);
    }

    return (
        <div className="board">
            <Card
             toggleFlipped={toggleFlipped}
             flipped={cardsList[i].text[i]}
            />
            {/* {cards.map(card => (
                <Card 
                key={card.id}
                text={cardContent.text(i)}
                />
            ))} */}
        </div>
    )
}

export default Board;
