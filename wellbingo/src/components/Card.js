import React from 'react'
import '../scss/Card.scss'

const Card = (props) => {

    // const handleClick = () => {
    //     handleChoice(card)
    // }
    // console.log(props.text);

    return (
        <>
                <button { props.flipped === true ? id="back" : id="front"} onClick={()=>props.toggleFlipped()}/>
                <button id="front" onClick={props.toggleFlipped}/>
                <button id="front" onClick={props.toggleFlipped}/>
                <button id="front" onClick={props.toggleFlipped}/>
                <button id="front" onClick={props.toggleFlipped}/>
                <button id="front" onClick={props.toggleFlipped}/>
                <button id="front" onClick={props.toggleFlipped}/>
                <button id="front" onClick={props.toggleFlipped}/>
                <button id="front" onClick={props.toggleFlipped}/>
                {/* <button className="back">{props.text}</button> */}
        </>
    )
}

export default Card;
