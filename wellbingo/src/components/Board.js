import React, {useState, useEffect} from 'react';

import axios from '../config/axios.config';

import Card from './Card';
import '../scss/Board.scss'


const Board = () => {
    const [ items, setItems ]  = useState([]);
    const [ isBingo, setIsBingo ]  = useState(false);
    const [ value, setValue ] = useState("");

    useEffect(() => {
        axios.get('/todos').then(({data}) => {

            const arrayChunk = ([...array], size) => {
                return array.reduce(
                    (acc, value, index) =>
                        index % size ? acc : [...acc, array.slice(index, index + size)], []
                );
            };

            setItems(arrayChunk(data.items, 3))
        })
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

        // updated is bingo or not
        const won = isWon(updated);
        if (won) setIsBingo(true);

        setItems(updated)
    }

    const isWon = (updated) => {
        const range = [0, 1, 2];

        return (
            range.find(row => range.every(column => updated[row][column].flipped)) !== undefined ||
            range.find(column => range.every(row => updated[row][column].flipped)) !== undefined ||
            range.every(row => updated[row][row].flipped) ||
            range.every(row => updated[row][2 - row].flipped)
        )
    }

    const onHandleAdd = () => {
        axios.post('/todo', {
            title: value
        });
    }

    return (
        <React.Fragment>
            {isBingo && <h1>BINGO</h1>}
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={onHandleAdd}>Add</button>
            <div className="board">
                {items.map((item, index) => {
                    return item.map(card => {
                        return <Card key={card.id} id={card.id} text={card.text} flipped={card.flipped} onClick={toggleFlipped}/>
                    })
                })}
            </div>
        </React.Fragment>
    )
}

export default Board;


// https://codesandbox.io/s/bingo-forked-cpk2ir?file=/src/index.js