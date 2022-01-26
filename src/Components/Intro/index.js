import React, { useEffect } from "react";
import "./intro.css";
const Intro = ({ setStage }) => {
  function startGame(e) {
    if (e.keyCode === 32) {
      setStage("game");
    }
  }

  useEffect(() => {
    window.addEventListener("keyup", (e) => startGame(e));
  });

  return (
    <div className="intro">
      <h1>Move the snake with the arrow keys</h1>
      <h1>or with A W S D</h1>
      <h3>Press the space bar to start</h3>
    </div>
  );
};

export default Intro;
