import React from "react";
import SnakePart from "../SnakePart";
import { nanoid } from "nanoid";

const Snake = ({ coords }) => {
  return (
    <div>
      {coords.map((coord) => (
        <SnakePart key={nanoid()} coords={coord} />
      ))}
    </div>
  );
};

export default Snake;
