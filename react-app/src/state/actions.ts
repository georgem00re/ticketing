
import Ticket from "../types/ticket";

export function addTicket(ticket: Ticket) {
	return {
		type: "ADD_TICKET",
		payload: ticket,
	};
}

export function updateTicket(ticket: Ticket) {
	return {
		type: "UPDATE_TICKET",
		payload: ticket,
	}
}

export function deleteTicket(ticket: Ticket) {
	return {
		type: "DELETE_TICKET",
		payload: ticket
	}
}