//components
import Board from "./Board";
import Info from "./Info";
//css
import "./css/app.css";
// Importing the useState hook
import { useState } from "react";

function App() {
  // the game should be reset or not
  const [reset, setReset] = useState(false);

  // Creating a winner state, which indicates
  // the current winner
  const [winner, setWinner] = useState("");

  // Sets the reset property to true
  // which starts the chain
  // reaction of resetting the board
  const resetBoard = () => {
    setReset(true);
  };
  return (
    <div className="App">
      {/* Shrink a popUp if there is no winner  */}
      <div className={`winner${winner !== "" ? "" : "Shrink"}`}>
        {/* Display Current Winner  */}
        <div className="winner-text">{winner}</div>
        {/* Button used to reset the board */}
        <button onClick={() => resetBoard()}>Reset Board</button>
      </div>
      {/* tic-tac-toe board  */}

      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
      />
      <Info />
    </div>
  );
}

export default App;
