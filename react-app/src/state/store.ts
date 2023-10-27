
import { createStore, combineReducers } from "redux";
import { ticketsReducer, selectedTicketReducer } from "./reducers";

const reducers = combineReducers({
	tickets: ticketsReducer,
	selectedTicket: selectedTicketReducer
})

export default createStore(reducers)
