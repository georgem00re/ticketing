
import { useDispatch } from "react-redux";
import { selectTicket } from "../state/actions";
import Ticket from "../types/ticket";
<<<<<<< HEAD
import moment from "moment";
=======
import PriorityIcon from "./PriorityIcon";
>>>>>>> master

interface TicketThumbnailProps {
	ticket: Ticket
}

export default function TicketThumbnail({ ticket }: TicketThumbnailProps) {

	const dispatch = useDispatch();
	const onClick = () => {
		dispatch(selectTicket(ticket.id))
	}

	const dateString = moment(ticket.created).format("DD/MM/YYYY");


	return (
<<<<<<< HEAD
		<div className="box mt-2 mb-0 p-2 py-3 is-clickable has-background-474A54 rounded has-border-dark" onClick={() => onClick()}>
			<h1 className="title m-0 is-7 has-text-white">#</h1>
			<p className="content is-5 has-text-white">{ticket.summary}</p>
			<p className="has-text-white">{dateString}</p>
=======
		<div className="box mt-2 mb-0 p-2 py-2 is-clickable has-background-474A54 rounded has-border-dark" onClick={() => onClick()}>
			<p className="content is-5 has-text-white mb-2">{ticket.summary}</p>
			<div className="is-flex is-justify-content-space-between is-align-items-center">
				<h1 className="title is-6 has-text-white inline m-0 p-0">#{ticket.number}</h1>
				<PriorityIcon priority={ticket.priority}/>
			</div>
>>>>>>> master
		</div>
	)
}
