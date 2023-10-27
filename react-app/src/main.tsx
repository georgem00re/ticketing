import ReactDOM from "react-dom/client";
import Column from "./components/Column";
import NavigationBar from "./components/NavigationBar.tsx";
import CreateTicketModal from "./components/CreateTicketModal";
import TicketThumbnail from "./components/TicketThumbnail";
import { Fragment, useState } from "react";
import { TicketStatus } from "./types/ticket";
import { useSelector, Provider } from "react-redux";
import TicketDetail from "./components/TicketDetail";
import store from "./state/store";

export default function App() {

	const [ticketModalActive, setTicketModalActive] = useState(false)
	const [ticketDetailActive, setTicketDetailActive] = useState(false)
	const ticketsObject = useSelector((state) => state.tickets)
	const ticketsArray = Object.entries(ticketsObject)[0]
	const selectedTicket = useSelector((state) => state.selectedTicket);

	return (
		<Fragment>
			<NavigationBar onCreateClicked={() => setTicketModalActive(true)}/>
			<CreateTicketModal active={ticketModalActive} onClose={() => setTicketModalActive(false)}/>
			<TicketDetail active={selectedTicket != null} onClose={() => setTicketDetailActive(false)}/>
			<div class="columns m-5">
				{Object.values(TicketStatus).map((str, _) => {
					return (
						<Column title={str}>
							{ticketsArray.filter((tick) => tick.status == str).map((el, index) => {
								return <TicketThumbnail identifier={index + 1} ticket={el}/> 
							})}
						</Column>
					)
				})}
			</div>
		</Fragment>
	)
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<App/>
	</Provider>
)
