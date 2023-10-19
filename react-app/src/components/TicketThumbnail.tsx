
interface TicketThumbnailProps {
	identifier: string
	summary: string
}

export default function TicketThumbnail({ summary, identifier }) {
	return (
		<div class="box mt-3 mb-0 p-2 is-clickable">
			<h1 class="title m-0 is-7">GRM-{identifier}</h1>
			<p>{summary}</p>
		</div>
	)
}