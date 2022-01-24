import React, { useEffect, useState, useReducer } from "react";
import SnakePart from "../SnakePart";
import { nanoid } from "nanoid";

const Snake = () => {
  const [direction, setDirection] = useState("right");

  const [snakeArray, setSnakeArray] = useState([
    { top: 0, left: 0 },
    { top: 0, left: 10 },
    { top: 0, left: 20 },
    { top: 0, left: 30 },
  ]);

  useEffect(() => {
    window.addEventListener("keydown", function (e) {
      console.log(e.key);
      if (e.key === "ArrowLeft") {
        setDirection("left");
      } else if (e.key === "ArrowUp") {
        setDirection("up");
      } else if (e.key === "ArrowRight") {
        setDirection("right");
      } else if (e.key === "ArrowDown") {
        setDirection("down");
      }
    });
  }, []);

  useEffect(() => {
    function snakeMoveRight() {
      let newSnakeArray = [
        ...snakeArray.slice(1),
        {
          top: snakeArray[0].top,
          left: snakeArray[0].left + snakeArray.length * 10,
        },
      ];
      setSnakeArray(newSnakeArray);
    }
    setTimeout(snakeMoveRight, 500);
  }, [snakeArray]);

  return (
    <div>
      {snakeArray.map((coord) => (
        <SnakePart key={nanoid()} coords={coord} />
      ))}
    </div>
  );
};

export default Snake;
