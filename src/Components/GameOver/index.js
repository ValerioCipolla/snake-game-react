import React from "react";
import "./gameOver.css";

const GameOver = ({ score, setStage, setScore, setSpeed }) => {
  function handleClick() {
    setStage({ type: "restart-game" });
    setScore(0);
    setSpeed(1);
  }
  return (
    <div className="game-over">
      <h1> Game Over.</h1>
      <h2> Your score was: {score}</h2>
      <button onClick={handleClick}>Click to play again</button>
    </div>
  );
};

export default GameOver;
