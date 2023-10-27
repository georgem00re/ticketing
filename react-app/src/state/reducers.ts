
import Ticket from "../types/ticket";
import { TicketStatus } from "../types/ticket"
import { v4 as uuidv4 } from "uuid";

interface Action {
	payload?: object;
	type: string;
}

const mockTicket: Ticket = {
	summary: "Pick up prescription",
	description: "dsfds",
	status: TicketStatus.BLOCKED,
	id: uuidv4(),
}

export function ticketsReducer(state = { [mockTicket.id]: mockTicket }, action: Action) {
	if (action.type === "ADD_TICKET") {
		return {...state, [action.payload.id]: action.payload}
	} else if (action.type === "UPDATE_TICKET") {
		return {...state, [action.payload.id]: action.payload}
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