
import { useState } from "react";
import { addTicket } from "../state/actions";
import { TicketStatus } from "../types/ticket";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

interface CreateTicketModalProps {
	active: boolean,
	onClose(): any
}

export default function CreateTicketModal({ active, onClose }: CreateTicketModalProps) {

	const [summary, setSummary] = useState("")	
	const [description, setDescription] = useState("")
	const dispatch = useDispatch()

	const createTicket = () => {
		const ticket: Ticket = { summary, description, status: TicketStatus.BLOCKED, id: uuidv4() };
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
				<div class="box rounded has-background-212121">
					<h1 class="title is-4 has-text-white">Create Ticket</h1>
					<div class="field">
  						<label class="label has-text-white">Summary</label>
						<div class="control">
							<input class="input has-background-1D1D1D has-border-dark has-text-white" value={summary} type="text" onChange={(e) => setSummary(e.target.value)}/>
						</div>
					</div>
					<div class="field">
						<label class="label has-text-white">Description</label>
						<div class="control">
							<textarea class="textarea has-background-1D1D1D has-border-dark has-text-white" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
					 	</div>
					</div>
					<div>
						<button class="button is-dark" onClick={() => {
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