import { TicketPriority } from "../types/ticket"
import { FcHighPriority, FcLowPriority, FcMediumPriority } from "react-icons/fc"

interface PriorityIconProps {
    priority: TicketPriority
}

export default function PriorityIcon({ priority }: PriorityIconProps) {
    const iconSize = "1.5rem"
    switch (priority) {
        case TicketPriority.HIGH: return <FcHighPriority size={iconSize}/>
        case TicketPriority.MEDIUM: return <FcMediumPriority size={iconSize}/>
        case TicketPriority.LOW: return <FcLowPriority size={iconSize}/>
    }
}