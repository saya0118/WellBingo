import React, {useState} from 'react'
import '../scss/Card.scss'

const Card = () => {

    const [flip, setFlip] = useState(false);

    const onHandleFlip = () => {
        setFlip(true)
        console.log(setFlip);
    }

    return (
        <div className="card">
            <button onClick={onHandleFlip}>burabura</button>
            <button>burabura</button>
            <button>burabura</button>
            <button>burabura</button>
            <button>burabura</button>
            <button>burabura</button>
            <button>burabura</button>
            <button>burabura</button>
            <button>burabura</button>
        </div>
    )
}

export default Card;
