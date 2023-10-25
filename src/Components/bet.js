import React from "react";

function BetComponent(props) {
    // Check if a team name exists in the selections list
    const isTeamSelected = (teamName) => {
        return props.losingTeams.includes(teamName);
    };

    return (
        <div className="grid-item">
            <h2>{props.groupName}</h2>
            <ul>
                <li style={{ color: isTeamSelected(props.team1) ? "red" : "inherit" }}>
                    {props.team1}
                </li>
                <li style={{ color: isTeamSelected(props.team2) ? "red" : "inherit" }}>
                    {props.team2}
                </li>
                <li style={{ color: isTeamSelected(props.team3) ? "red" : "inherit" }}>
                    {props.team3}
                </li>
            </ul>
            <h2>£{props.value}</h2>
        </div>
    );
}

export default BetComponent;
