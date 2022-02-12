import React from 'react'

const Card = (props) => {
    return (
        <button className="card">
            {props.value}
        </button>
    )
}

export default Card;
