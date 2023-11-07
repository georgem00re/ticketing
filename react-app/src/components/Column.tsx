
interface ColumnProps {
	title: string,
	children: JSX.Element[]
}

export default function Column({ title, children }: ColumnProps) {
	return (
		<div className="column has-background-212121 m-5 p-3 has-border-dark rounded" style={{ minHeight: "75vh"}}>
			<div className="mb-4">
				<h1 className="title is-7 mb-2 has-text-grey inline">{title.toUpperCase()}</h1>
				<h1 className="subtitle is-7 mb-2 has-text-grey ml-2 pl-1 pr-1 inline has-border-grey circular">1</h1>
			</div>
			{children}
		</div>
	)
}
