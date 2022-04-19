import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./EditList.scss";
import { Add, Delete, Edit } from "../../actions/index";
import axios from "../../config/axios.config";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";

export const EditList = () => {
  // const items = useSelector((state) => state.cardsList);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const fetchTodoList = () => {
    axios.get("/todos").then((res) => {
      console.log(res);
      setItems(res.data.items);
    });
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const onHandleTextChange = (e) => {
    setTodo(e.target.value);
  };

  const onHandleClear = () => setTodo("");

  const onHandleEditTextChange = (e) => {
    setEditText(e.target.value);
  };

  const setDefaultText = (index) => {
    const label = items[index].text;
    setEditText(label);
    console.log(editText);
  };

  const onHandleEdit = (index) => {
    setEditIndex(index);
    setDefaultText(index);
  };

  const onHandleAdd = () => {
    dispatch(Add(todo));
    onHandleClear();
    axios
      .post("/add-todos", { text: todo })
      .then(() => {
        fetchTodoList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onHandleDelete = (item) => {
    console.log(item);
    axios
      .delete(`/delete-todos/${item.id}`)
      .then(() => {
        fetchTodoList();
      })
      .catch((err) => console.log(err));
  };

  const onHandleUpdate = (item) => {
    setEditIndex(null);
    axios
      .put(`/update-todos/${item.id}`, { text: editText })
      .then(() => {
        fetchTodoList();
      })
      .catch((err) => console.log(err));
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
        <button className="add-button" onClick={onHandleAdd}>
          Add
        </button>
      </div>
      <ul>
        {items.map((item, i) => {
          return (
            <li key={i} className="list">
              <div className="text-box">
                {editIndex === i ? (
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
                {editIndex === i ? (
                  <DoneIcon
                    color="action"
                    sx={{ fontSize: 20 }}
                    onClick={() => onHandleUpdate(item)}
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
                  onClick={() => onHandleDelete(item)}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
