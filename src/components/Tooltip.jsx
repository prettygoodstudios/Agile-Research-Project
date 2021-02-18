import React from "react";

const Tooltip = ({word, definition}) => {
    return <div className="tooltip">
        {word}
        <div className="tooltip__popup">
            {definition}
            <div className="tooltip__popup__carot"></div>
        </div>
    </div>
}

export default Tooltip;