import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./EditList.scss";
import { Add } from "../../actions/index";

import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";

// import { Edit } from "../../actions/index";

export const EditList = () => {
  const items = useSelector((state) => state.cardsList);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {

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

  const onHandleTextChange = (e) => {
    setTodo(e.target.value);
  };

  const onHandleEdit = (index) => {
    setIsEditing(true);
  };

  const onHandleUpdate = (index) => {
    setIsEditing(false);
  };

  const onHandleDelete = (index) => {};

  return (
    <div className="list-box">
      <div className="input-add">
        <input
          type="text"
          className="input"
          value={todo}
          onChange={onHandleTextChange}
        />
        <button className="add-button" onClick={() => dispatch(Add(todo))}>
          Add
        </button>
      </div>
      <ul>
        {todos.map((item) => {
          return item.map((card, i) => {
            return (
              <li key={i} className="list">
                <div className="text-box">
                  {isEditing ? (
                    <input type="text" className="input" value={card.text} />
                  ) : (
                    card.text
                  )}
                </div>
                <button className="edit-button">
                  {isEditing ? (
                    <DoneIcon
                      color="action"
                      sx={{ fontSize: 20 }}
                      onClick={() => onHandleUpdate(card.index)}
                    />
                  ) : (
                    <EditIcon
                      color="action"
                      sx={{ fontSize: 15 }}
                      className="edit-icon"
                      onClick={() => onHandleEdit(card.index)}
                    />
                  )}
                </button>
                <button className="delete-button">
                  <DeleteIcon
                    color="action"
                    sx={{ fontSize: 15 }}
                    className="edit-icon"
                    onClick={() => onHandleDelete(card.index)}
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

// const mapStateToProps = (state) => {
//   return { list: state.cardsList };
// };

// export default connect(mapStateToProps, { Edit })(EditList);
