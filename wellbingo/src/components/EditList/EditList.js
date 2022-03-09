import React, { useState } from "react";
import { useSelector, connect } from "react-redux";
import "./EditList.scss";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { Edit } from "../../actions/index";

const EditList = () => {
  const items = useSelector((state) => state.cardsList);
  const [isEditing, setIsEditing] = useState(false);

  const onHandleEdit = (index) => {
    setIsEditing(true);
  };

  const onHandleUpdate = (index) => {
    setIsEditing(false);
  };

  return (
    <div className="list-box">
      <ul>
        {items.map((item, i) => {
          return item.map((card) => {
            return (
              <li key={i}>
                <div className="text-box">
                  {isEditing ? <input className="input"></input> : card.text}
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
              </li>
            );
          });
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { list: state.cardsList };
};

export default connect(mapStateToProps, { Edit })(EditList);
