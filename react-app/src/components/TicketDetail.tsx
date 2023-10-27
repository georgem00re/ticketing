
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedTicket, updateTicket } from "../state/actions";
import { useState, useEffect } from "react";
import type { RootState } from '../state/store'
import Ticket from "../types/ticket";

interface TicketDetailProps {
	active: boolean,
}

export default function TicketDetail({ active }: TicketDetailProps) {

	const dispatch = useDispatch();
	const ticketsObject = useSelector((state: RootState) => state.tickets);
	const selectedTicket = useSelector((state: RootState) => state.selectedTicket);
	const ticket = ticketsObject[selectedTicket] as Ticket;
	const [summary, setSummary] = useState(ticket.summary)
	const [description, setDescription] = useState(ticket.description)

	const cancel = () => {
		dispatch(clearSelectedTicket())
	}

	const save = () => {
		dispatch(updateTicket({ summary, description, status: ticket.status, id: selectedTicket }))
		dispatch(clearSelectedTicket())
	}

	const onSummaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSummary(e.target.value)
	}

	const onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setDescription(e.target.value)
	}

	useEffect(() => {
		setSummary(ticket.summary)
		setDescription(ticket.description)
	}, [active])

	return (
		<div className={active ? "modal is-active" : "modal"}>
			<div className="modal-background"></div>
			<div className="modal-content">
				<div className="box has-background-212121 rounded">
					<div className="field">
  						<label className="label has-text-white">Summary</label>
						<div className="control">
							<input className="input has-background-1D1D1D has-border-dark has-text-white" type="text" value={summary} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSummaryChange(e)}/>
						</div>
					</div>
					<div className="field">
						<label className="label has-text-white">Description</label>
						<div className="control">
							<textarea className="textarea has-background-1D1D1D has-border-dark has-text-white" value={description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onDescriptionChange(e)}></textarea>
					 	</div>
					</div>
					<div>
						<button className="button is-dark" onClick={() => cancel()}>Cancel</button>
						<button className="button is-link ml-3" onClick={() => save()}>Save</button>
					</div>
				</div>
			</div>
		</div>
	)
}