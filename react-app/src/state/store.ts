
import { createStore, combineReducers } from "redux";
import { ticketsReducer, selectedTicketReducer } from "./reducers";

const reducers = combineReducers({
	tickets: ticketsReducer,
	selectedTicket: selectedTicketReducer
})

const persistedState = JSON.parse(localStorage.getItem("reduxState") ?? "{}");
const store = createStore(reducers, persistedState);

store.subscribe(() => {
	localStorage.setItem("reduxState", JSON.stringify(store.getState()))
})

export type RootState = ReturnType<typeof store.getState>
export default store;