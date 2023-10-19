
import Divider from "./Divider";

interface ColumnProps {
	title: string,
	children: JSX.Element
}

export default function Column({ title, children }: ColumnProps) {
	return (
		<div class="column has-background-light-grey m-2">
			<h1 class="title is-7 mb-2">{title}</h1>
			{children}
		</div>
	)
}