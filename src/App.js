import "./App.css";
import React, { useState, createContext } from "react";
import Keyboard from "./components/keyboard/Keyboard";
import Board from "./components/Board";
import { defaultBoard } from "./components/keyboard/Word";

export const AppContext = createContext();

function App() {
  //Create a state that handles the board
  const [board, setBoard] = useState(defaultBoard);
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <div className="wordle-container">
      <AppContext.Provider value={{ board, setBoard }}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
