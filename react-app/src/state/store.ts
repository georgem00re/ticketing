
import { createStore, combineReducers } from "redux";
import { ticketsReducer } from "./reducers";

const reducers = combineReducers({
	tickets: ticketsReducer
})

export default createStore(reducers)
