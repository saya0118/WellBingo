import React from "react";
import { EditButton } from "../EditButton/EditButton";
import { Board } from "../Board/Board";

export const Home = () => {
  return (
    <div className="home">
        <h1>WellBingo</h1>
        <EditButton />
        <Board />
    </div>
  );
};
