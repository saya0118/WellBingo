import { combineReducers } from 'redux';
import { listReducer } from '../reducers/index';

export default combineReducers({
    lists: listReducer
})