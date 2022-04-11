const initialState = [
  {
    id: 0,
    text: "drink 1L water",
    flipped: false,
  },
  {
    id: 1,
    text: "do yoga",
    flipped: false,
  },
  {
    id: 2,
    text: "meet someone",
    flipped: false,
  },
  {
    id: 3,
    text: "call your family",
    flipped: false,
  },
  {
    id: 4,
    text: "soak in the sun",
    flipped: false,
  },
  {
    id: 5,
    text: "read a book",
    flipped: false,
  },
  {
    id: 6,
    text: "tell your gratitude of someone",
    flipped: false,
  },
  {
    id: 7,
    text: "study 30min",
    flipped: false,
  },
  {
    id: 8,
    text: "wake up earlier",
    flipped: false,
  },
];
export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_ADDED":
      const newItem = {
        id: state.length,
        text: action.payload,
        flipped: false,
      };
      return [...state, newItem];

    case "LIST_DELETED":
      state.splice(action.payload, 1);
      return [...state];

    case "LIST_EDITED":
      const copiedState = [...state];
      copiedState[action.payload.index].text = action.payload.value;
      return copiedState;

    default:
      return state;
  }
};
