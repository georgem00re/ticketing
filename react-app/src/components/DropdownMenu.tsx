
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"

interface DropdownMenuProps {
    currentValue: number;
	values: string[];
    onClickValue: (x: number) => void;
}

export default function DropdownMenu({ currentValue, values, onClickValue }: DropdownMenuProps) {
    const [isActive, setActive] = useState(false)
    const toggleActive = () => setActive(!isActive)

    return (
		<div className={`dropdown ${isActive ? "is-active" : null}`}>
		  <div className="dropdown-trigger">
		    <button className="button is-dark rounded" aria-haspopup="true" aria-controls="dropdown-menu3" onClick={() => toggleActive()}>
                <span>{values[currentValue]}</span>
                <span className="icon">
                    <FaChevronDown size="0.75rem"/>
                </span>
		    </button>
		  </div>
		  <div className="dropdown-menu" id="dropdown-menu3" role="menu">
		    <div className="dropdown-content has-background-dark">
		    	{values.map((el, index) => {
					return <a key={index} onClick={() => {
						onClickValue(index)
						setActive(false)
					}} className="dropdown-item has-background-dark has-text-white">{el}</a>
				})}
		    </div>
		  </div>
		</div>
	)
}
