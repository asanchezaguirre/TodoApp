import { combineReducers } from 'redux';
import items from './items';

const mainTodoReducer = combineReducers({
    items
});

export default mainTodoReducer;
