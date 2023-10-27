
import { AiOutlineIssuesClose } from "react-icons/ai"
import { IoMdAddCircle } from "react-icons/io"

interface NavigationBarProps {
	onCreateClicked: any
}

export default function NavigationBar({ onCreateClicked }: NavigationBarProps) {
	return (
		<nav className="navbar is-transparent p-1 box has-bottom-border-grey">
			<div className="navbar-brand">
				<div className="navbar-item">
					<AiOutlineIssuesClose fontSize="1.20rem" color="white"/>
					<h1 className="subtitle is-5 ml-2 has-text-white">Trackit</h1>
				</div>
			</div>
			<div className="navbar-menu">
				<div className="navbar-end">
					<div className="navbar-item">
						<button className="button is-link has-text-white" onClick={() => onCreateClicked()}>
						    <span className="icon is-small">
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