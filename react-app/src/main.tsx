import ReactDOM from "react-dom/client";
import Column from "./components/Column";
import NavigationBar from "./components/NavigationBar.tsx";
import CreateTicketModal from "./components/CreateTicketModal";
import TicketThumbnail from "./components/TicketThumbnail";
import { Fragment, useState } from "react";
import { TicketStatus } from "./types/ticket";
import { useSelector, Provider } from "react-redux";
import store from "./state/store";

export default function App() {

	const [ticketModalActive, setTicketModalActive] = useState(false)
	const tickets = useSelector((state) => state.tickets)

	return (
		<Fragment>
			<NavigationBar onCreateClicked={() => setTicketModalActive(true)}/>
			<CreateTicketModal active={ticketModalActive} onClose={() => setTicketModalActive(false)}/>
			<div class="columns m-5">
				{Object.values(TicketStatus).map((str, index) => {
					return (
						<Column title={str}>
							{tickets.filter((tick) => tick.status == str).map((el, _) => {
								return <TicketThumbnail identifier={1} summary={el.summary}/> 
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
