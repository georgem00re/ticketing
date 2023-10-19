
import Divider from "./Divider";

interface ColumnProps {
	title: string,
	children: JSX.Element
}

export default function Column({ title, children }: ColumnProps) {
	return (
		<div class="column has-background-white m-2 box">
			<h1 class="title is-6 mb-2">{title}</h1>
			<Divider color="#212121"/>
			{children}
		</div>
	)
}