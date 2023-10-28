
import { IoIosArrowDropdownCircle } from "react-icons/io"
import { TicketStatus } from "../types/ticket";

interface TicketStatusDropdownProps {
	active: boolean,
	onClick: any,
	currentStatus: TicketStatus,
}

export default function TicketStatusDropdown({ active, onClick, currentStatus }: TicketStatusDropdownProps) {
	const allTicketStates = Object.entries(TicketStatus);
	return (
		<div class="dropdown is-hoverable">
		  <div class="dropdown-trigger">
		    <button class="button is-dark is-small rounded" aria-haspopup="true" aria-controls="dropdown-menu3">
		      <span>{currentStatus}</span>
		      <span class="icon is-small">
		        <IoIosArrowDropdownCircle/>
		      </span>
		    </button>
		  </div>
		  <div class="dropdown-menu" id="dropdown-menu3" role="menu">
		    <div class="dropdown-content is-dark">
		    	{allTicketStates.map(([key, value], index) => {
		    		return (
		    			<a onClick={() => onClick(TicketStatus[key])} class="dropdown-item">{value}</a>
		    		)
		    	})}
		    </div>
		  </div>
		</div>
	)
}