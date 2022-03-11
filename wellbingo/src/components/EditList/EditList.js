import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./EditList.scss";
import { Add, Delete, Edit } from "../../actions/index";

import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";

export const EditList = () => {
  const items = useSelector((state) => state.cardsList);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");
  // const [index, setIndex] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const onHandleTextChange = (e) => {
    setTodo(e.target.value);
  };

  const onHandleClear = () => [setTodo("")];

  const onHandleEditTextChange = (e) => {
    setEditText(e.target.value);
  };

  const setDefaultText = (index) => {
    const label = editText[index];
    setEditText(label);
    // console.log(index);
  };

  const onHandleEdit = (index) => {
    setIsEditing(true);
    setDefaultText(index);
  };

  return (
    <div className="list-box">
      <div className="add-box">
        <input
          type="text"
          className="input-add"
          value={todo}
          onChange={onHandleTextChange}
        />
        <button className="add-button" onClick={() => dispatch(Add(todo))}>
          Add
        </button>
      </div>
      <ul>
        {items.map((item, i) => {
          return (
            <li key={i} className="list">
              <div className="text-box">
                {isEditing ? (
                  <input
                    type="text"
                    className="input"
                    value={editText}
                    onChange={onHandleEditTextChange}
                  />
                ) : (
                  item.text
                )}
              </div>
              <button className="edit-button">
                {isEditing ? (
                  <DoneIcon
                    color="action"
                    sx={{ fontSize: 20 }}
                    onClick={() => dispatch(Edit(editText, i))}
                  />
                ) : (
                  <EditIcon
                    color="action"
                    sx={{ fontSize: 15 }}
                    className="edit-icon"
                    onClick={() => onHandleEdit(i)}
                  />
                )}
              </button>
              <button className="delete-button">
                <DeleteIcon
                  color="action"
                  sx={{ fontSize: 15 }}
                  className="edit-icon"
                  onClick={() => dispatch(Delete(i))}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
