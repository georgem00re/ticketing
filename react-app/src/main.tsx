import ReactDOM from "react-dom/client";
import Column from "./components/Column";
import { Fragment } from "react";
import NavigationBar from "./components/NavigationBar.tsx";

const columns = ["BLOCKED", "TODO", "IN PROGRESS", "DONE"]

export default function App() {
	return (
		<Fragment>
			<NavigationBar/>
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
