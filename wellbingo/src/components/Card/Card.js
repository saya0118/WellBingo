import React from "react";
import "./Card.scss";
// import { EditButton } from './EditIcon'

const Card = (props) => {
  // Google: "react className (inline style) conditional inline"

  return (
    <>
      <button
        className={props.flipped ? "back" : "front"}
        onClick={() => props.onClick(props.id)}
      >
        {props.text}
      </button>
    </>
  );
};

export default Card;
