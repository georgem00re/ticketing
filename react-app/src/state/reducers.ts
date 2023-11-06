
import Ticket from "../types/ticket";

interface Action {
	payload?: object;
	type: string;
}

export function ticketsReducer(state = {}, action: Action) {
	if (action.type === "ADD_TICKET") {
		const ticket = action.payload as Ticket
		return {...state, [ticket.id]: ticket}
	} else if (action.type === "UPDATE_TICKET") {
		const ticket = action.payload as Ticket
		return {...state, [ticket.id]: ticket}
	} else if (action.type === "DELETE_TICKET") {
		return state;
	} else {
		return state;
	}
}

export function selectedTicketReducer(state = null, action: Action) {
	if (action.type === "SELECT_TICKET") {
		return action.payload;
	} else if (action.type === "CLEAR_SELECTED_TICKET") {
		return null;
	} else {
		return state;
	}
}

export function ticketCountReducer(state = 0, action: Action) {
	if (action.type === "ADD_TICKET") {
		return state += 1
	}
}