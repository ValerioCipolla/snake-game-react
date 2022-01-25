import React, { useEffect, useState, useReducer } from "react";
import SnakePart from "../SnakePart";
import { nanoid } from "nanoid";

function reducer(state, action) {
  if (action.type === "change-direction-left") {
    if (state.direction === "right") {
      return state;
    } else {
      return { ...state, direction: action.payload.direction };
    }
  } else if (action.type === "change-direction-up") {
    if (state.direction === "down") {
      return state;
    } else {
      return { ...state, direction: action.payload.direction };
    }
  } else if (action.type === "change-direction-right") {
    if (state.direction === "left") {
      return state;
    } else {
      return { ...state, direction: action.payload.direction };
    }
  } else if (action.type === "change-direction-down") {
    if (state.direction === "up") {
      return state;
    } else {
      return { ...state, direction: action.payload.direction };
    }
  } else {
    return state;
  }
}

const Snake = () => {
  const [state, dispatch] = useReducer(reducer, { direction: "right" });

  const [snakeArray, setSnakeArray] = useState([
    { top: 0, left: 0 },
    { top: 0, left: 10 },
    { top: 0, left: 20 },
    { top: 0, left: 30 },
  ]);

  function changeDirection(e) {
    console.log(e.key);
    if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
      dispatch({
        type: "change-direction-left",
        payload: { direction: "left" },
      });
    } else if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
      dispatch({
        type: "change-direction-up",
        payload: { direction: "up" },
      });
    } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
      dispatch({
        type: "change-direction-right",
        payload: { direction: "right" },
      });
    } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
      dispatch({
        type: "change-direction-down",
        payload: { direction: "down" },
      });
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", (e) => changeDirection(e));
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
