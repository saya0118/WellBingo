import { createStore, combineReducers } from "redux";
import { listReducer } from "../reducers/index";

const rootReducers = combineReducers ({
    cardsList: listReducer
})

export const store = createStore(rootReducers);
