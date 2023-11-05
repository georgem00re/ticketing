
export default interface Ticket {
	id: string
	summary: string,
	description: string,
	status: TicketStatus,
	created: Date,
}

export enum TicketStatus {
	BLOCKED = "BLOCKED",
	TODO = "TODO",
	IN_PROGRESS = "IN PROGRESS",
	DONE = "DONE"
}
