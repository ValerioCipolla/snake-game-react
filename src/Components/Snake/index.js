import React from "react";
import SnakePart from "../SnakePart";

const Snake = ({ coords }) => {
  return (
    <div>
      {coords.map((coord) => (
        <SnakePart coords={coord}/>
      ))}
    </div>
  );
};

export default Snake;
