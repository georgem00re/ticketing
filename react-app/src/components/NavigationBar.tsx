
import { ImTicket } from "react-icons/im"

export default function NavigationBar({ onCreateClicked }) {
	return (
		<nav class="navbar is-background-white">
			<div class="navbar-brand">
				<div class="navbar-item">
					<ImTicket fontSize="25px"/>
				</div>
			</div>
			<div class="navbar-menu">
				<div class="navbar-end">
					<div class="navbar-item">
						<button class="button is-link is-small" onClick={() => onCreateClicked()}>Create</button>
					</div>
				</div>
				
			</div>
		</nav>
	)
}