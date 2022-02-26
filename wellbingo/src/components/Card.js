import React from 'react'
import '../scss/Card.scss'

const Card = (props) => {

    // const handleClick = () => {
    //     handleChoice(card)
    // }
    // console.log(props.text);

    return (
        <>
                <button className="front" onClick={props.changeTheColor}/>
                <button className="front" onClick={props.changeTheColor}/>
                <button className="front" onClick={props.changeTheColor}/>
                <button className="front" onClick={props.changeTheColor}/>
                <button className="front" onClick={props.changeTheColor}/>
                <button className="front" onClick={props.changeTheColor}/>
                <button className="front" onClick={props.changeTheColor}/>
                <button className="front" onClick={props.changeTheColor}/>
                <button className="front" onClick={props.changeTheColor}/>
                {/* <button className="back">{props.text}</button> */}
        </>
    )
}

export default Card;
