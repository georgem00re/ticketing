
import { createStore, combineReducers } from "redux";
import { ticketsReducer, selectedTicketReducer } from "./reducers";

const reducers = combineReducers({
	tickets: ticketsReducer,
	selectedTicket: selectedTicketReducer
})

const store = createStore(reducers);
export type RootState = ReturnType<typeof store.getState>
export default store;
