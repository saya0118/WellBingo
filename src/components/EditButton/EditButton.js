import React from "react";
import { Link } from "react-router-dom";
import "./EditButton.scss";
import EditIcon from "@mui/icons-material/Edit";

export const EditButton = () => {
  return (
    <Link to="/edit-page">
      <button className="edit-button">
        <EditIcon color="action" sx={{ fontSize: 15 }} className="edit-icon" />
      </button>
    </Link>
  );
};
