
interface TicketThumbnailProps {
	identifier: string
	summary: string
}

export default function TicketThumbnail({ summary, identifier }) {
	return (
		<div class="box mt-2 mb-0 p-2 py-3 is-clickable" style={{ backgroundColor: "#454853", borderRadius: "5px", borderStyle: "solid", borderWidth: "1px", borderColor: "#292929"}}>
			<h1 class="title m-0 is-7 has-text-white">#{identifier}</h1>
			<p class="content is-5 has-text-white">{summary}</p>
		</div>
	)
}
