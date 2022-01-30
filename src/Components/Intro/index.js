import React from "react";
import "./intro.css";
import Button from "../Button";

const Intro = ({ setStage }) => {
  function handleClick() {
    setStage({ type: "start-game" });
  }
  return (
    <div className="intro">
      <h1>Move the snake with the arrow keys</h1>
      <h1>or with A W S D</h1>
      <Button handleClick={handleClick} text="START GAME"/>
    </div>
  );
};

export default Intro;
