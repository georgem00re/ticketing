
interface DividerProps {
	color: string
}

export default function Divider({ color }: DividerProps) {
	return (
		<div style={{ height: "1px", width: "100%", backgroundColor: "#292929", marginBottom: "20px"}}></div>
	)
}