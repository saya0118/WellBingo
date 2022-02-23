import React, {useState} from 'react'
import '../scss/Card.scss'

const Card = ({card, handleChoice, flipped}) => {

    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <button className="front" onClick={handleClick}/>
                <button className="back"/>
            </div>
        </div>
    )
}

export default Card;
