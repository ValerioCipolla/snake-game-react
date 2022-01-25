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
    function snakeMove() {
      let head = snakeArray[snakeArray.length - 1];
      if (state.direction === "right") {
        let newSnakeArray = [
          ...snakeArray.slice(1),
          {
            top: head.top,
            left: head.left + 10,
          },
        ];
        setSnakeArray(newSnakeArray);
      } else if (state.direction === "down") {
        let newSnakeArray = [
          ...snakeArray.slice(1),
          { top: head.top + 10, left: head.left },
        ];
        setSnakeArray(newSnakeArray);
      } else if (state.direction === "left") {
        let newSnakeArray = [
          ...snakeArray.slice(1),
          { top: head.top, left: head.left - 10 },
        ];
        setSnakeArray(newSnakeArray);
      } else if (state.direction === "up") {
        let newSnakeArray = [
          ...snakeArray.slice(1),
          { top: head.top - 10, left: head.left },
        ];
        setSnakeArray(newSnakeArray);
      }
    }
    let timer = setTimeout(snakeMove, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [snakeArray, state.direction]);

  return (
    <div>
      {snakeArray.map((coord) => (
        <SnakePart key={nanoid()} coords={coord} />
      ))}
    </div>
  );
};

export default Snake;
