import ReactDOM from "react-dom/client";
import Column from "./components/Column";
import { Fragment } from "react";

export default function App() {
	return (
		<div class="columns is-variable is-3">
			<Column title="TODO"/>
			<Column title="IN PROGRESS"/>
			<Column title="IN REVIEW"/>
			<Column title="DONE"/>
		</div>
	)
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<App/>
)
