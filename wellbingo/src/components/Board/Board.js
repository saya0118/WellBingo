import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Modal from "../PopUp/PopUp";
import "./Board.scss";

export const Board = () => {
  const [bingo, setBingo] = useState(false);
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const items = useSelector((state) => state.cardsList);

  useEffect(() => {

    // filterで9個ランダムに選ぶ式

    const arrayChunk = ([...array], size) => {
      console.log(array);
      return array.reduce(
        (acc, value, index) =>
          index % size ? acc : [...acc, array.slice(index, index + size)],
        []
      );
    };

    setTodos(arrayChunk(items, 3));

  }, [items]);

  const toggleFlipped = (id) => {
    const updated = todos.map((item) => {
      return item.map((card) => {
        if (card.id === id) {
          card.flipped = !card.flipped;
        }
        return card;
      });
    });

    const isBingo = (card) => card.flipped === true;

    todos.forEach((item) => {
      return item.every(isBingo) ? setBingo(true) : console.log("false");
    });

    todos.forEach((item, i) => {
      if (todos[0][i].flipped && todos[1][i].flipped && todos[2][i].flipped) {
        setBingo(true);
      } else if (
        todos[0][0].flipped &&
        todos[1][1].flipped &&
        todos[2][2].flipped
      ) {
        setBingo(true);
      } else if (
        todos[0][2].flipped &&
        todos[1][1].flipped &&
        todos[2][0].flipped
      ) {
        setBingo(true);
      }
    });
    // settodos(updated)
  };

  console.log(todos);

  return (
    <>
      {bingo ? (
        <Modal bingo={bingo} handleClose={() => setBingo(false)} />
      ) : (
        console.log("non")
      )}
      <div className="board">
        {todos.map((item, index) => {
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
