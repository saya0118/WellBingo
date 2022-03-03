import React, {useState, useEffect} from 'react';
import Card from './Card';
import '../scss/Board.scss'


const Board = () => {
    const [ items, setItems ]  = useState([]);

    useEffect(() => {
        // axios.get
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
                    id: 3,
                    text: "soak in sunshine",
                    flipped: false
                },
                {
                    id: 4,
                    text: "read a book",
                    flipped: false
                },
                {
                    id: 5,
                    text: "admire a friend",
                    flipped: false
                }
            ],
            [
                {
                    id: 6,
                    text: "study 30min",
                    flipped: false
                },
                {
                    id: 7,
                    text: "meet new people",
                    flipped: false
                },
                {
                    id: 8,
                    text: "do yoga",
                    flipped: false
                }
            ]
        ]

        setItems(cardsList);
    }, [])

    const toggleFlipped = (id) => {
        const updated = items.map(item => {
            return item.map(card => {
                if (card.id === id) {
                    card.flipped = !card.flipped
                }
                return card
            })
        })

        const isBingo = (cardsList) => cardsList.flipped === true;

        const rowBingo = items.map(item=>{
           return (item.every(isBingo) ? alert("bingo") : alert("not bingo"))
        })

        setItems(updated)
    }

    return (
        <div className="board">
            {items.map((item, index) => {
                return item.map(card => {
                    return <Card key={card.id} id={card.id} text={card.text} flipped={card.flipped} onClick={toggleFlipped}/>
                })
            })}
        </div>
    )
}

export default Board;
