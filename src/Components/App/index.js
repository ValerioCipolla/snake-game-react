import React, { useState } from "react";
import Snake from "../Snake";
import "./app.css";

const Board = () => {


  return (
    <div id="game-board" className="game-board">
      <Snake/>
    </div>
  );
};

export default Board;
