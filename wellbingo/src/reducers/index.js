const initialState = [
  {
    id: 0,
    text: "drink 1L water",
    flipped: false,
  },
  {
    id: 1,
    text: "tell someone of your gratitude",
    flipped: false,
  },
  {
    id: 2,
    text: "go for a walk",
    flipped: false,
  },
  {
    id: 3,
    text: "soak in sunshine",
    flipped: false,
  },
  {
    id: 4,
    text: "read a book",
    flipped: false,
  },
  {
    id: 5,
    text: "admire a friend",
    flipped: false,
  },
  {
    id: 6,
    text: "study 30min",
    flipped: false,
  },
  {
    id: 7,
    text: "meet new people",
    flipped: false,
  },
  {
    id: 8,
    text: "do yoga",
    flipped: false,
  },
];

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_ADDED":
      const newItem = {
        id: state.length - 1,
        text: action.payload,
        flipped: false,
      };

      return [...state, newItem];
    case "LIST_DELETED":
      state.splice(action.payload, 1);
      return [...state];

    case "LIST_EDITED":
      const copiedState = [...state];
      copiedState[action.payload.index] = action.payload.value;
      return copiedState;

    default:
      return state;
  }
};
