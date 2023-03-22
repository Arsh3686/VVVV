import { createStore } from "redux";
import allreducer from "./combineReducers";

const store = createStore(
	allreducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
