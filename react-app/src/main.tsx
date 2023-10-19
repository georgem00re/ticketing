import ReactDOM from "react-dom/client";
import NavigationBar from "./components/NavigationBar.tsx";
import CreateTicketModal from "./components/CreateTicketModal";
import { Fragment, useState } from "react";

export default function App() {

	const [ticketModalActive, setTicketModalActive] = useState(false)

	return (
		<Fragment>
			<NavigationBar onCreateClicked={() => setTicketModalActive(true)}/>
			<CreateTicketModal active={ticketModalActive} onClose={() => setTicketModalActive(false)}/>
		</Fragment>
	)
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<App/>
)
