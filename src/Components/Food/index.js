import React from "react";
import "./food.css";

const Food = ({ coords }) => {
  return (
    <div style={{ top: coords.top, left: coords.left }} className="food"></div>
  );
};

export default Food;
