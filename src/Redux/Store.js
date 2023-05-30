import { createStore } from "redux";
import cartReducer from "./Reducers/Reducer";
import { combineReducers } from "redux";

const store = createStore(combineReducers({ cartReducer }));

export default store;
