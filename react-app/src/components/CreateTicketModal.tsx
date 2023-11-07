
import { useState } from "react";
import { addTicket } from "../state/actions";
import { TicketPriority, TicketStatus } from "../types/ticket";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Ticket from "../types/ticket";
import DropdownMenu from "./DropdownMenu";
import type { RootState } from '../state/store'

interface CreateTicketModalProps {
	active: boolean,
	onClose(): any
}

export default function CreateTicketModal({ active, onClose }: CreateTicketModalProps) {

	const [summary, setSummary] = useState("")	
	const [description, setDescription] = useState("")
	const priorityStates = Object.values(TicketPriority)
	const [priority, setPriority] = useState(0)
	const dispatch = useDispatch()
	const tickets = useSelector((state: RootState) => state.tickets)
	const ticketsCount = Object.keys(tickets).length

	const createTicket = () => {
<<<<<<< HEAD
		const ticket: Ticket = { summary, description, status: TicketStatus.BLOCKED, id: uuidv4(), created: Date.now() };
=======
		const ticket: Ticket = { 
			summary, 
			description, 
			status: TicketStatus.BLOCKED, 
			id: uuidv4(), 
			priority: priorityStates[priority] as TicketPriority,
			number: ticketsCount + 1
		};
>>>>>>> master
		dispatch(addTicket(ticket))
	}

	const clearState = () => {
		setSummary("")
		setDescription("")
		setPriority(0)
	}

	return (
		<div className={active ? "modal is-active" : "modal"}>
			<div className="modal-background" onClick={() => {
				clearState()
				onClose()
			}}></div>
			<div className="modal-content">
				<div className="box rounded has-background-212121">
					<h1 className="title is-4 has-text-white">Create Ticket</h1>
					<div className="field">
  						<label className="label has-text-white">Summary</label>
						<div className="control">
							<input className="input has-background-1D1D1D has-border-dark has-text-white" value={summary} type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSummary(e.target.value)}/>
						</div>
					</div>
					<div className="field">
  						<label className="label has-text-white">Priority</label>
						<div className="control">
							<DropdownMenu currentValue={priority} values={priorityStates} onClickValue={(index: number) => setPriority(index)}/>
						</div>
					</div>
					<div className="field">
						<label className="label has-text-white">Description</label>
						<div className="control">
							<textarea className="textarea has-background-1D1D1D has-border-dark has-text-white" value={description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}></textarea>
					 	</div>
					</div>
					<div>
						<button className="button is-dark" onClick={() => {
							clearState()
							onClose()
						}}>Cancel</button>
						<button className="button is-link ml-3" onClick={() => {
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