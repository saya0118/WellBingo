import React from "react";
import { useSelector } from "react-redux";
import "./EditList.scss";
import EditIcon from "@mui/icons-material/Edit";

export const EditList = () => {
  const items = useSelector((state) => state.cardsList);

  return (
    <div className="list-box">
      <ul>
        {items.map((item, i) => {
          return item.map((card) => {
            return (
              <li key={i}>
                <div className="text-box">{card.text}</div>
                <button className="edit-button">
                  <EditIcon
                    color="action"
                    sx={{ fontSize: 15 }}
                    className="edit-icon"
                  />
                </button>
              </li>
            );
          });
        })}
      </ul>
    </div>
  );
};
