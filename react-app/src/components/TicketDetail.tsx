
interface TicketDetailProps {
	active: boolean,
	onClose: any
}

export default function TicketDetail({ active, onClose }: TicketDetailProps) {
	return (
		<div class={active ? "modal is-active" : "modal"}>
			<div class="modal-background" onClick={() => {
				onClose()
			}}></div>
			<div class="modal-content">
				<div class="box">
					<h1 class="title is-4">#1</h1>
					<div class="field">
  						<label class="label">Summary</label>
						<div class="control">
							<input class="input" type="text"/>
						</div>
					</div>
					<div class="field">
						<label class="label">Description</label>
						<div class="control">
							<textarea class="textarea"></textarea>
					 	</div>
					</div>
					<div>
						<button class="button is-light" onClick={() => {
							onClose()
						}}>Cancel</button>
						<button class="button is-link ml-3" onClick={() => {
							onClose()
						}}>Save</button>
					</div>
				</div>
			</div>
		</div>
	)
}