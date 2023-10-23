
import Divider from "./Divider";

interface ColumnProps {
	title: string,
	children: JSX.Element
}

export default function Column({ title, children }: ColumnProps) {
	return (
		<div class="column has-background-transparent m-5 p-4" style={style}>
			<h1 class="title is-7 mb-2 has-text-grey" style={{ display: "inline"}}>{title}</h1>
			<h1 class="subtitle is-7 mb-2 has-text-grey ml-2 pl-1 pr-1" style={{ display: "inline", borderStyle: "solid", borderWidth: "1px", borderRadius: "1000px"}}>1</h1>
			{children}
		</div>
	)
}

const style = {
	borderStyle: "solid",
	borderColor: "#292929",
	minHeight: "77vh",
	backgroundColor: "#212121",
	height: "100%",
	borderRadius: "8px"
}