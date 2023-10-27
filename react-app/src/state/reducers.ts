
import Ticket from "../types/ticket";
import { TicketStatus } from "../types/ticket" 

interface Action {
	payload: object;
	type: string;
}

const mockTicket: Ticket = {
	summary: "Pick up prescription",
	description: "dsfds",
	status: TicketStatus.BLOCKED,
}

export function ticketsReducer(state = [mockTicket, mockTicket], action: Action) {
	if (action.type === "ADD_TICKET") {
		return [...state, action.payload]
	} else if (action.type === "UPDATE_TICKET") {
		return state;
	} else if (action.type === "DELETE_TICKET") {
		return state;
	} else {
		return state;
	}
}
