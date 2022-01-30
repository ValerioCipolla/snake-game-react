import React, { useState, useReducer } from "react";
import Board from "../Board";
import Score from "../Score";
import "./app.css";

function reducer(state, action) {
  switch (action.type) {
    case "start-game":
      return { ...state, stage: "game" };
    case "finish-game":
      return { ...state, stage: "game-over" };
    case "restart-game":
      return { ...state, stage: "game" };
    default:
      return state;
  }
}

const App = () => {
  const [score, setScore] = useState(0);
  const [state, dispatch] = useReducer(reducer, { stage: "intro" });

  return (
    <>
      <Score score={score} />
      <Board
        setScore={setScore}
        score={score}
        stage={state.stage}
        setStage={dispatch}
      />
    </>
  );
};

export default App;
