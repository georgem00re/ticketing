
import { useDispatch } from "react-redux";
import { selectTicket } from "../state/actions";

interface TicketThumbnailProps {
	ticket: Ticket
}

export default function TicketThumbnail({ ticket }: TicketThumbnailProps) {

	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(selectTicket(ticket.id))
	}

	return (
		<div class="box mt-2 mb-0 p-2 py-3 is-clickable has-background-474A54 rounded has-border-dark" onClick={() => onClick()}>
			<h1 class="title m-0 is-7 has-text-white">#{ticket.identifier}</h1>
			<p class="content is-5 has-text-white">{ticket.summary}</p>
		</div>
	)
}
