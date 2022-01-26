import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Snake from "../Snake";
import "./board.css";

const Board = ({ setScore, score }) => {
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    if (score >= 5) {
      setSpeed(1.5);
    } else if (score >= 10) {
      setSpeed(2);
    } else if (score >= 15) {
      setSpeed(2.5);
    } else if (score >= 20) {
      setSpeed(3);
    } else if (score >= 25) {
      setSpeed(4);
    }
  }, [score]);

  return (
    <div id="game-board" className="game-board">
      <Snake score={score} speed={speed} setScore={setScore} />
    </div>
  );
};

export default Board;
