import React, {useState} from "react";

function PersonComponent(props){

    const [isGreen, setIsGreen] = useState(true)

    const handleClick = () => {
        // Toggle the color
        setIsGreen(!isGreen);

        // Toggle the selection in the parent component
        props.toggleSelection(props.selection);
    };
    
    const buttonStyle = {
        backgroundColor: isGreen ? "green" : "red",
    };


    return (
        <div className="grid-item">
        <button onClick={handleClick} style={buttonStyle}>
            <h3>{props.name}</h3>
            <p>{props.selection}</p>
        </button>
        </div>
    );
}

export default  PersonComponent
