import React, { useState } from "react";
import Snake from "../Snake";
import "./app.css";

const Board = () => {
  const [snakeArray, setSnakeArray] = useState([
    { top: 0, left: 0 },
    { top: 0, left: 10 },
    { top: 0, left: 20 },
  ]);

  return (
    <div id="game-board" className="game-board">
      <Snake coords={snakeArray} />
    </div>
  );
};

export default Board;
