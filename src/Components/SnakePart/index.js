import React from "react";
import "./snakePart.css";

const SnakePart = ({ coords }) => {
  return (
    <div
      className="snake-part"
      style={{ top: coords.top, left: coords.left }}
    ></div>
  );
};

export default SnakePart;
