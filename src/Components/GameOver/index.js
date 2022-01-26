import React from "react";
import "./gameOver.css";

const GameOver = ({ score }) => {
  return (
    <div className="game-over">
      <h1> Game Over.</h1>
      <h2> Your score was: {score}</h2>
    </div>
  );
};

export default GameOver;
