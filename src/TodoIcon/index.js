import React from "react";
import {FaCheckCircle} from 'react-icons/fa';
import {MdCancel} from 'react-icons/md';
import './TodoIcon.css'

const iconTypes = {
    "check": color => (
        <FaCheckCircle className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
        <MdCancel className="Icon-svg Icon-svg--delete" fill={color}/>
    )
}

function TodoIcon({type, color = 'gray', onClick}) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };