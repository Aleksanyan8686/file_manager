import { createStore, combineReducers } from 'redux';
import foldersDataReducer from "./foldersDataReducer.js"

let reducers = combineReducers({
foldersData:foldersDataReducer
});
const store = createStore(reducers);
window.store=store
export default store