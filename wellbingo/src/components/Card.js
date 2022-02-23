import React, {useState} from 'react'
import '../scss/Card.scss'

const Card = ({card}) => {

    // const handleClick = () => {
    //     handleChoice(card)
    // }

    return (
        <div className="card">
            <div>
                <button className="front"/>
                <button className="back"/>
            </div>
        </div>
    )
}

export default Card;
