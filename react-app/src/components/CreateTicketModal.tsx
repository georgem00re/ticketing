
interface CreateTicketModalProps {
	active: boolean
}

export default function CreateTicketModal({ active }: CreateTicketModalProps) {
	return (
		<div class={active ? "modal is-active" : "modal"}>
			<div class="modal-background"></div>
			<div class="modal-content">
				<div class="box">
					<h1 class="title is-4">Create Ticket</h1>
					<div class="field">
  						<label class="label">Summary</label>
						<div class="control">
							<input class="input" type="text" placeholder="Text input"/>
						</div>
					</div>
					<div class="field">
						<label class="label">Description</label>
						<div class="control">
							<textarea class="textarea" placeholder="Textarea"></textarea>
					 	</div>
					</div>
					<div>
						<button class="button is-light">Cancel</button>
						<button class="button is-link">Create</button>
					</div>
				</div>
			</div>
			<button class="modal-close is-large"></button>
		</div>
	)
}