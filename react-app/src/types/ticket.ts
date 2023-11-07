
export default interface Ticket {
	id: string
	summary: string,
	description: string,
	status: TicketStatus,
	created: number,
	priority: TicketPriority,
	number: number,
}

export enum TicketStatus {
	BLOCKED = "Blocked",
	TODO = "Todo",
	IN_PROGRESS = "In progress",
	DONE = "Done"
}

export enum TicketPriority {
	LOW = "Low",
	MEDIUM = "Medium",
	HIGH = "High",
}