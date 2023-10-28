
import { IoIosArrowDropdownCircle } from "react-icons/io"
import { TicketStatus } from "../types/ticket";

interface TicketStatusDropdownProps {
	onClick: any,
	currentStatus: TicketStatus,
}

export default function TicketStatusDropdown({ onClick, currentStatus }: TicketStatusDropdownProps) {
	const allTicketStates = Object.entries(TicketStatus);
	return (
		<div className="dropdown is-hoverable">
		  <div className="dropdown-trigger">
		    <button className="button is-dark is-small rounded" aria-haspopup="true" aria-controls="dropdown-menu3">
		      <span>{currentStatus}</span>
		      <span className="icon is-small">
		        <IoIosArrowDropdownCircle/>
		      </span>
		    </button>
		  </div>
		  <div className="dropdown-menu" id="dropdown-menu3" role="menu">
		    <div className="dropdown-content has-background-dark">
		    	{allTicketStates.map(([key, value], _) => {
		    		return (
		    			<a onClick={() => onClick(TicketStatus[key as keyof typeof TicketStatus])} className="dropdown-item has-background-dark has-text-white">{value}</a>
		    		)
		    	})}
		    </div>
		  </div>
		</div>
	)
}