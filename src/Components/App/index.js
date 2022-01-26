import React, { useState } from "react";
import Board from "../Board";
import Score from "../Score";
import "./app.css";

const App = () => {
  const [score, setScore] = useState(0);
  
  return (
    <>
      <Score score={score} />
      <Board setScore={setScore} score={score}/>
    </>
  );
};

export default App;
