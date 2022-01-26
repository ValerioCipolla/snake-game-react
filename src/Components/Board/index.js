import React from "react";
import Snake from "../Snake";
import "./board.css";

const Board = ({incrementScore}) => {
  return (
    <div id="game-board" className="game-board">
      <Snake incrementScore={incrementScore}/>
    </div>
  );
};

export default Board;
