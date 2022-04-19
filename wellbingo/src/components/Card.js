import React from 'react'
import '../scss/Card.scss'

const Card = (props) => {

    // Google: "react className (inline style) conditional inline"

    return (
        <>
                {/* <button className={props.flipped ? "back" : "front"}> Sample</button> */}
                <button className={ props.flipped ? "back" : "front"} onClick={()=> props.onClick(props.id)}>
                    <button onClick={() => props.onHandleDelete(props.id)}>Delete</button>
                    <button onClick={() => props.onHandleUpdate(props.id)}>Edit</button>
                    {props.text}
                </button>
        </>
    )
}

export default Card;
