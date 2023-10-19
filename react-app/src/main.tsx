import ReactDOM from "react-dom/client";
import NavigationBar from "./components/NavigationBar.tsx";
import CreateTicketModal from "./components/CreateTicketModal";
import { Fragment } from "react";

export default function App() {
	return (
		<Fragment>
			<NavigationBar/>
			<CreateTicketModal active={true}/>
		</Fragment>
	)
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<App/>
)
