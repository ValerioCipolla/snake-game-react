import React, { useState } from "react";
import SnakePart from "../SnakePart";
import { nanoid } from "nanoid";

const Snake = () => {
  const [snakeArray, setSnakeArray] = useState([
    { top: 0, left: 0 },
    { top: 0, left: 10 },
    { top: 0, left: 20 },
    { top: 0, left: 30 },
  ]);

  // setInterval(snakeMove, 1000);

  // function snakeMove() {
  //   let newSnakeArray = snakeArray.map(function (item) {
  //     return { top: item.top, left: (item.left += 10) };
  //   });
  //   setSnakeArray(newSnakeArray);
  // }

  return (
    <div>
      {snakeArray.map((coord) => (
        <SnakePart key={nanoid()} coords={coord} />
      ))}
    </div>
  );
};

export default Snake;
