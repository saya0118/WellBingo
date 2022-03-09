export const LIST_ADDED = "LIST_EDITED";
export const Edit = (text, index) => {
  return {
    type: "LIST_EDITED",
    payload: {
      value: text,
      index: index,
    },
  };
};
