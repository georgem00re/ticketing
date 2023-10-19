
interface TicketThumbnailProps {
	summary: string
}

export default function TicketThumbnail({ summary }) {
	return (
		<div class="box mt-3">
			<p>{summary}</p>
		</div>
	)
}