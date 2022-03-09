import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Modal from "../PopUp/PopUp";
import "./Board.scss";

export const Board = () => {
  const [bingo, setBingo] = useState(false);

  const items = useSelector((state) => state.cardsList);

  const toggleFlipped = (id) => {
    const updated = items.map((item) => {
      return item.map((card) => {
        if (card.id === id) {
          card.flipped = !card.flipped;
        }
        return card;
      });
    });

    const isBingo = (card) => card.flipped === true;

    items.forEach((item) => {
      return item.every(isBingo) ? setBingo(true) : console.log("false");
    });

    items.forEach((item, i) => {
      if (items[0][i].flipped && items[1][i].flipped && items[2][i].flipped) {
        setBingo(true);
      } else if (
        items[0][0].flipped &&
        items[1][1].flipped &&
        items[2][2].flipped
      ) {
        setBingo(true);
      } else if (
        items[0][2].flipped &&
        items[1][1].flipped &&
        items[2][0].flipped
      ) {
        setBingo(true);
      }
    });
    // setItems(updated)
    return;
  };

  return (
    <>
      {bingo ? (
        <Modal bingo={bingo} handleClose={() => setBingo(false)} />
      ) : (
        console.log("non")
      )}
      <div className="board">
        {items.map((item, index) => {
          return item.map((card) => {
            return (
              <Card
                key={card.id}
                id={card.id}
                text={card.text}
                flipped={card.flipped}
                onClick={toggleFlipped}
              />
            );
          });
        })}
      </div>
    </>
  );
};
