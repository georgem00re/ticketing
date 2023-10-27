
import Divider from "./Divider";

interface ColumnProps {
	title: string,
	children: JSX.Element
}

export default function Column({ title, children }: ColumnProps) {
	return (
		<div class="column has-background-212121 m-5 p-3 has-border-dark rounded" style={{ minHeight: "75vh"}}>
			<div class="mb-4">
				<h1 class="title is-7 mb-2 has-text-grey" style={{ display: "inline"}}>{title}</h1>
				<h1 class="subtitle is-7 mb-2 has-text-grey ml-2 pl-1 pr-1 inline has-border-grey circular">1</h1>
			</div>
			{children}
		</div>
	)
}
