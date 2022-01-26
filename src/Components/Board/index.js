import React, { useState, useEffect } from "react";
import Snake from "../Snake";
import Intro from "../Intro";
import "./board.css";

const Board = ({ setScore, score }) => {
  const [speed, setSpeed] = useState(1);
  const [stage, setStage] = useState("intro");

  useEffect(() => {
    if (score >= 50) {
      setSpeed(50);
    } else if (score >= 40) {
      setSpeed(20);
    } else if (score >= 35) {
      setSpeed(12);
    } else if (score >= 30) {
      setSpeed(10);
    } else if (score >= 25) {
      setSpeed(7);
    } else if (score >= 20) {
      setSpeed(5);
    } else if (score >= 15) {
      setSpeed(3);
    } else if (score >= 10) {
      setSpeed(2);
    } else if (score >= 5) {
      setSpeed(1.5);
    }
  }, [score]);

  if (stage === "game") {
    return (
      <div id="game-board" className="game-board">
        <Snake score={score} speed={speed} setScore={setScore} />
      </div>
    );
  } else if (stage === "intro") {
    return (
      <div id="game-board" className="game-board">
        <Intro setStage={setStage}/>
      </div>
    );
  }
};

export default Board;
