
import { useState } from "react";
import { addTicket } from "../state/actions";
import { TicketStatus } from "../types/ticket";
import { useDispatch } from "react-redux"

interface CreateTicketModalProps {
	active: boolean,
	onClose(): any
}

export default function CreateTicketModal({ active, onClose }: CreateTicketModalProps) {

	const [summary, setSummary] = useState("")	
	const [description, setDescription] = useState("")
	const dispatch = useDispatch()

	const createTicket = () => {
		const ticket: Ticket = { summary, description, status: TicketStatus.TODO }
		dispatch(addTicket(ticket))
	}

	const clearState = () => {
		setSummary("")
		setDescription("")
	}

	return (
		<div class={active ? "modal is-active" : "modal"}>
			<div class="modal-background" onClick={() => {
				clearState()
				onClose()
			}}></div>
			<div class="modal-content">
				<div class="box">
					<h1 class="title is-4">Create Ticket</h1>
					<div class="field">
  						<label class="label">Summary</label>
						<div class="control">
							<input class="input" value={summary} type="text" onChange={(e) => setSummary(e.target.value)}/>
						</div>
					</div>
					<div class="field">
						<label class="label">Description</label>
						<div class="control">
							<textarea class="textarea" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
					 	</div>
					</div>
					<div>
						<button class="button is-light" onClick={() => {
							clearState()
							onClose()
						}}>Cancel</button>
						<button class="button is-link ml-3" onClick={() => {
							createTicket()
							clearState()
							onClose()
						}}>Create</button>
					</div>
				</div>
			</div>
		</div>
	)
}