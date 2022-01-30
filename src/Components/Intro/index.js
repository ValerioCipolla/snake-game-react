import React from "react";
import "./intro.css";
const Intro = ({ setStage }) => {
  function handleClick() {
    setStage({ type: "start-game" });
  }
  return (
    <div className="intro">
      <h1>Move the snake with the arrow keys</h1>
      <h1>or with A W S D</h1>
      <button onClick={handleClick}>Click to start game</button>
    </div>
  );
};

export default Intro;
