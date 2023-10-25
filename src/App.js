import people from "./data/people"
import PersonConponent from "./Components/person.js"
import BetComponent from "./Components/bet"
import bets from "./data/bets"
import "./index.css";
import React, {useState, useEffect} from "react";

function App() {

  const [selections, setSelections] = useState([]); 
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    let newTotalValue = 0;

    // Iterate through bets and check if any teams are red
    bets.forEach((bet) => {
      if (
        !selections.includes(bet.team1) &&
        !selections.includes(bet.team2) &&
        !selections.includes(bet.team3)
      ) {
        // None of the teams are red, so add the value
        newTotalValue += bet.value;
      }
    });
    // Update the total value
    setTotalValue(newTotalValue);
  }, [selections, bets]);

  // Define a function to add or remove a selection from the list
  const toggleSelection = (selection) => {
    setSelections((prevSelections) => {
      // Check if the selection already exists in the list
      if (prevSelections.includes(selection)) {
        // If it exists, remove it
        return prevSelections.filter((item) => item !== selection);
      } else {
        // If it doesn't exist, add it
        return [...prevSelections, selection];
      }
    });
  };

  // Use useEffect to log the updated selections whenever selections change
  useEffect(() => {
    console.log("selections: ", selections);
  }, [selections]);
  return (
    <div >
      <h1>
        Selections for the Week 
      </h1>
      <h2>
        Click on the losing teams
      </h2>
      <div className="grid-container">
      {people.map((person, index)=>(
      <PersonConponent
        key={index}
        name={person.name}
        selection={person.selection}
        toggleSelection={toggleSelection}
      />
      ))}
      </div>
      <h1>
        Money we stand to win: £{totalValue.toFixed(2)}
      </h1>
      <h1>
        Bets for the week
      </h1>
      <div className="grid-container">
      {bets.map((bet, index)=>(
        <BetComponent
        key={index}
        groupName={bet.groupName}
        team1={bet.team1}
        team2={bet.team2}
        team3={bet.team3}
        value={bet.value}
        losingTeams={selections}
        />
      ))}
      </div>
     
    </div>
  );
}

export default App;
