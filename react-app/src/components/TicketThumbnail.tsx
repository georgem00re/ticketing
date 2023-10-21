
interface TicketThumbnailProps {
	identifier: string,
	summary: string,
	onClick: any
}

export default function TicketThumbnail({ summary, identifier, onClick }: TicketThumbnailProps) {
	return (
		<div class="box mt-3 mb-0 p-2 is-clickable" onClick={() => onClick()}>
			<h1 class="title m-0 is-7">#{identifier}</h1>
			<p class="content is-5">{summary}</p>
		</div>
	)
}