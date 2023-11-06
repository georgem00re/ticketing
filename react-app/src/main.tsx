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
import Ticket from "./types/ticket";
import type { RootState } from './state/store'

export default function App() {

	const [ticketModalActive, setTicketModalActive] = useState(false)
	const ticketsObject = useSelector((state: RootState) => state.tickets)
	const ticketsArray = Object.values(ticketsObject) as Ticket[]
	const selectedTicket = useSelector((state: RootState) => state.selectedTicket);

	return (
		<Fragment>
			<NavigationBar onCreateClicked={() => setTicketModalActive(true)}/>
			<CreateTicketModal active={ticketModalActive} onClose={() => setTicketModalActive(false)}/>
			<TicketDetail active={selectedTicket != null}/>
			<div className="columns m-5">
				{Object.values(TicketStatus).map((str, _) => {
					return (
						<Column title={str}>
							{ticketsArray?.filter((tick: Ticket) => tick.status == str).map((el: Ticket, index) => {
								return <TicketThumbnail key={index} ticket={el}/> 
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
