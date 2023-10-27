
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedTicket, updateTicket } from "../state/actions";
import { useState, useEffect } from "react";
import { TicketStatus } from "../types/ticket"; 

interface TicketDetailProps {
	active: boolean,
	onClose: any,
	ticket: Ticket,
}

export default function TicketDetail({ active, onClose }: TicketDetailProps) {

	const dispatch = useDispatch();
	const ticketsObject = useSelector((state) => state.tickets);
	const selectedTicket = useSelector((state) => state.selectedTicket);
	const ticket = ticketsObject[selectedTicket];
	const [summary, setSummary] = useState(ticket?.summary)
	const [description, setDescription] = useState(ticket?.description)

	const cancel = () => {
		dispatch(clearSelectedTicket())
	}

	const save = () => {
		dispatch(updateTicket({ summary, description, status: ticket.status, id: selectedTicket }))
		dispatch(clearSelectedTicket())
	}

	const onSummaryChange = (e) => {
		setSummary(e.target.value)
	}

	const onDescriptionChange = (e) => {
		setDescription(e.target.value)
	}

	useEffect(() => {
		setSummary(ticket?.summary)
		setDescription(ticket?.description)
	}, [active])

	return (
		<div class={active ? "modal is-active" : "modal"}>
			<div class="modal-background" onClick={() => {
				onClose()
			}}></div>
			<div class="modal-content">
				<div class="box has-background-212121 rounded">
					<div class="field">
  						<label class="label has-text-white">Summary</label>
						<div class="control">
							<input class="input has-background-1D1D1D has-border-dark has-text-white" type="text" value={summary} onChange={(e) => onSummaryChange(e)}/>
						</div>
					</div>
					<div class="field">
						<label class="label has-text-white">Description</label>
						<div class="control">
							<textarea class="textarea has-background-1D1D1D has-border-dark has-text-white" value={description} onChange={(e) => onDescriptionChange(e)}></textarea>
					 	</div>
					</div>
					<div>
						<button class="button is-dark" onClick={() => cancel()}>Cancel</button>
						<button class="button is-link ml-3" onClick={() => save()}>Save</button>
					</div>
				</div>
			</div>
		</div>
	)
}