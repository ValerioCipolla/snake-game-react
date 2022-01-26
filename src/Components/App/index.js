import React, { useReducer } from "react";
import Board from "../Board";
import Score from "../Score";
import "./app.css";

function reducer(state, action) {
  switch (action.type) {
    case "increment-score":
      return { ...state, score: state.score + 1 };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { score: 0 });
  return (
    <>
      <Score score={state.score} />
      <Board incrementScore={dispatch} />
    </>
  );
};

export default App;
