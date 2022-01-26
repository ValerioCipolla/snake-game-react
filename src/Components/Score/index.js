import React from "react";
import "./score.css";

const componentName = ({ score }) => {
  return (
    <div className="score">
      <h1>Score: {score} </h1>
    </div>
  );
};

export default componentName;
