import React, {useState} from 'react'
import '../scss/Card.scss'

const Card = (props) => {

    // const handleClick = () => {
    //     handleChoice(card)
    // }
    console.log(props.text);

    return (
        <div className="card">
            <div>
                <button className="front"/>
                <button className="back">{props.text}</button>
            </div>
        </div>
    )
}

export default Card;
