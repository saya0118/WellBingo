import React, {useState, useEffect} from 'react';
import Card from './Card';
import '../scss/Board.scss'


const Board = () => {
    const [cards, setCards] = useState(false);
    // const [horizontalRow, setHorizontalRow] = useState([]);
    // const [verticalRow, setVerticalRow] = useState([]);


    useEffect(() => {
        const cardContent = [
            [
                {
                    id: 0,
                    text: "drink 1L water",
                    checked: false
                },
                {
                    id: 1,
                    text: "tell someone of your gratitude",
                    checked: false
                },
                {
                    id: 2,
                    text: "go for a walk",
                    checked: false
                }
            ],
            [
                {
                    id: 0,
                    text: "soak in sunshine",
                    checked: false
                },
                {
                    id: 1,
                    text: "read a book",
                    checked: false
                },
                {
                    id: 2,
                    text: "admire a friend",
                    checked: false
                }
            ],
            [
                {
                    id: 0,
                    text: "study 30min",
                    checked: false
                },
                {
                    id: 1,
                    text: "meet new people",
                    checked: false
                },
                {
                    id: 2,
                    text: "do yoga",
                    checked: false
                }
            ]
        ]

    }, )
    

    // const changeTheColor = () => {
    //     checked === true ?  : 
    // }

    return (
        <div className="board">
            <Card
            //  changeTheColor={changeTheColor}
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
