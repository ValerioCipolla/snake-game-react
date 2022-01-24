import React, { useEffect, useState, useReducer } from "react";
import SnakePart from "../SnakePart";
import { nanoid } from "nanoid";

const Snake = () => {
  const [direction, setDirection] = useState("RIGHT");

  const [snakeArray, setSnakeArray] = useState([
    { top: 0, left: 0 },
    { top: 0, left: 10 },
    { top: 0, left: 20 },
    { top: 0, left: 30 },
  ]);

  useEffect(() => {
    function changeDirection(e) {
      console.log(e.keyCode);
    }

    window.addEventListener("keydown", changeDirection);
  }, []);

  useEffect(() => {
    function snakeMove() {
      let newSnakeArray = snakeArray.map(function (item) {
        return { top: item.top, left: (item.left += 10) };
      });
      setSnakeArray(newSnakeArray);
    }
    setTimeout(snakeMove, 500);
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
