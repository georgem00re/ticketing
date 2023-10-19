
interface DividerProps {
	color: string
}

export default function Divider({ color }: DividerProps) {
	return (
		<div style={{ height: "3px", width: "100%", backgroundColor: color}}></div>
	)
}