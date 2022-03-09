import React from "react";
import "./EditPage.scss";
import { EditList } from "../EditList/EditList";

export const EditPage = () => {
  return (
    <div className="edit-page">
      <h1>WellBingo</h1>
      <div className="edit-container">
        <div className="h2-box">
          <h2>Change your own bingo cards</h2>
        </div>
        <EditList />
      </div>
    </div>
  );
};
