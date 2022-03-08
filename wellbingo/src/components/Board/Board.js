import React, {useState, useEffect} from 'react';
import Card from '../Card/Card';
import Modal from '../PopUp/PopUp';
import './Board.scss';

export const Board = () => {
    const [ items, setItems ]  = useState([]);
    const [ bingo, setBingo ] = useState(false);

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

        const isBingo = (card) => card.flipped === true;

        items.forEach(item => {
            return (item.every(isBingo) ? setBingo(true) : console.log("false") )
        })

       items.forEach((item,i)=> {
           if(items[0][i].flipped && items[1][i].flipped && items[2][i].flipped){
            setBingo(true);
        }else if(items[0][0].flipped && items[1][1].flipped && items[2][2].flipped){
            setBingo(true);
        }else if(items[0][2].flipped && items[1][1].flipped && items[2][0].flipped){
            setBingo(true);
        }
    })
        setItems(updated)
    }

    return (
        <>
            {
                bingo ? <Modal bingo={bingo} handleClose={()=>setBingo(false)}/> : console.log('non')
            }
            <div className="board">
                {items.map((item, index) => {
                    return item.map(card => {
                        return <Card key={card.id} id={card.id} text={card.text} flipped={card.flipped} onClick={toggleFlipped}/>
                    })
                })}
            </div>
        </>
    )
}
