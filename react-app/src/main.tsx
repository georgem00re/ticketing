import ReactDOM from "react-dom/client";
import NavigationBar from "./components/NavigationBar.tsx";

export default function App() {
	return (
		<NavigationBar/>
	)
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<App/>
)
