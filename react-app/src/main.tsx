import ReactDOM from "react-dom/client";
import Column from "./components/Column";
import NavigationBar from "./components/NavigationBar.tsx";
import CreateTicketModal from "./components/CreateTicketModal";
import { Fragment, useState } from "react";

const columns = ["BLOCKED", "TODO", "IN PROGRESS", "DONE"]

export default function App() {

	const [ticketModalActive, setTicketModalActive] = useState(false)

	return (
		<Fragment>
			<NavigationBar onCreateClicked={() => setTicketModalActive(true)}/>
			<CreateTicketModal active={ticketModalActive} onClose={() => setTicketModalActive(false)}/>
			<div class="columns m-5">
				{columns.map((str, index) => {
					return <Column title={str}/>
				})}
			</div>
		</Fragment>
	)
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<App/>
)
