import React, { useState, useEffect } from "react";
import axios from "../../config/axios.config";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Modal from "../PopUp/PopUp";
import "./Board.scss";

export const Board = () => {
  const [bingo, setBingo] = useState(false);
  const [todos, setTodos] = useState([]);

  const items = useSelector((state) => state.cardsList);

  useEffect(() => {
    axios.get('/all').then((res) => {
      console.log(res)
    })
  }, [])

  useEffect(() => {
    const createShuffledArray = (items) => {
      const tempArray = items;
      for (let i = tempArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = tempArray[i];
        tempArray[i] = tempArray[j];
        tempArray[j] = tmp;
      }
      return tempArray;
    };

    const shuffledArray = createShuffledArray(items);

    const arrayChunk = ([...randomArray], size) => {
      return randomArray.reduce(
        (acc, value, index) =>
          index % size ? acc : [...acc, randomArray.slice(index, index + size)],
        []
      );
    };

    const bingoSheet = arrayChunk(shuffledArray, 3).filter((x, i) => i < 3);

    setTodos(bingoSheet);
  }, [items]);

  const toggleFlipped = (index) => {
    const updated = todos.map((item) => {
      return item.map((card) => {
        if (card.id === index) {
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
    setTodos(updated);
  };

  return (
    <>
      {bingo ? (
        <Modal bingo={bingo} handleClose={() => setBingo(false)} />
      ) : (
        console.log("not bingo")
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
