export const LIST_ADDED = "LIST_ADDED";
export const LIST_DELETED = "LIST_DELETED";
export const LIST_EDITED = "LIST_EDITED";

export const Add = (todo) => {
  return {
    type: "LIST_ADDED",
    payload: todo,
  };
};

export const Delete = (index) => {
  return {
    type: "LIST_DELETED",
    payload: index,
  };
};

export const Edit = (text, index) => {
  return {
    type: "LIST_EDITED",
    payload: {
      value: text,
      index: index,
    },
  };
};
