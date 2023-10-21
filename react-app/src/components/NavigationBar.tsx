
import { AiOutlineIssuesClose } from "react-icons/ai"
import { IoMdAddCircle } from "react-icons/io"

export default function NavigationBar({ onCreateClicked }) {
	return (
		<nav class="navbar is-transparent p-1 box has-bottom-border-grey">
			<div class="navbar-brand">
				<div class="navbar-item">
					<AiOutlineIssuesClose fontSize="1.20rem" color="white"/>
					<h1 class="subtitle is-5 ml-2 has-text-white">Trackit</h1>
				</div>
			</div>
			<div class="navbar-menu">
				<div class="navbar-end">
					<div class="navbar-item">
						<button class="button is-link has-text-white" onClick={() => onCreateClicked()}>
						    <span class="icon is-small">
						      <IoMdAddCircle fontSize="1.20rem" color="white"/>
						    </span>
						    <span>Create</span>
						</button>
					</div>
				</div>
				
			</div>
		</nav>
	)
}