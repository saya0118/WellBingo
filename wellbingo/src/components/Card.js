import React, {useState} from 'react'
import '../scss/Card.scss'

const Card = () => {

    const [flip, setFlip] = useState(false);

    const onHandleFlip = () => {
        const clickedCard = flip;
        clickedCard = !clickedCard
        console.log(clickedCard);
    }

    return (
        <div className="card">
            {
                flip === true ? <button onClick={()=>onHandleFlip()} className="button-true">true</button> : <button className="button-false" onClick={()=>onHandleFlip()}>burabura</button>
            }
            <button className="button-false">burabura</button>
            <button className="button-false">burabura</button>
            <button className="button-false">burabura</button>
            <button className="button-false">burabura</button>
            <button className="button-false">burabura</button>
            <button className="button-false">burabura</button>
            <button className="button-false">burabura</button>
            <button className="button-false">burabura</button>
        </div>
    )
}

export default Card;
