
export default interface Ticket {
	summary: string,
	description: string,
	status: TicketStatus,
}

export enum TicketStatus {
	BLOCKED = "BLOCKED",
	TODO = "TODO",
	IN_PROGRESS = "IN PROGRESS",
	DONE = "DONE"
}
