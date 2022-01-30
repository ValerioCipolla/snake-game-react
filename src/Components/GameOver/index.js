import React from "react";
import Button from "../Button";
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
      <Button handleClick={handleClick} text="PLAY AGAIN" />
    </div>
  );
};

export default GameOver;
