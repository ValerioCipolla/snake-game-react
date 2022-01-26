import React, { useEffect, useState, useReducer } from "react";
import SnakePart from "../SnakePart";
import { nanoid } from "nanoid";
import Food from "../Food";

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

const Snake = ({ incrementScore }) => {
  const [state, dispatch] = useReducer(reducer, { direction: "right" });
  const [isDead, setIsDead] = useState(false);
  const [snakeArray, setSnakeArray] = useState([
    { top: 0, left: 0 },
    { top: 0, left: 10 },
    { top: 0, left: 20 },
    { top: 0, left: 30 },
    { top: 0, left: 40 },
  ]);
  const [food, setFood] = useState(generateFood());

  function generateFood() {
    return {
      top: Math.floor(Math.random() * 40) * 10,
      left: Math.floor(Math.random() * 40) * 10,
    };
  }

  function changeDirection(e) {
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
    function hasEaten(head, food) {
      if (head.top === food.top && head.left === food.left) {
        return true;
      }
    }

    function growSnake(tail, snakeArray, direction) {
      if (direction === "right") {
        return [{ top: tail.top, left: tail.left - 10 }, ...snakeArray];
      } else if (direction === "down") {
        return [{ top: tail.top - 10, left: tail.left }, ...snakeArray];
      } else if (direction === "left") {
        return [{ top: tail.top, left: tail.left + 10 }, ...snakeArray];
      } else if (direction === "up") {
        return [{ top: tail.top + 10, left: tail.left }, ...snakeArray];
      }
    }
    let head = snakeArray[snakeArray.length - 1];
    let tail = snakeArray[0];
    if (hasEaten(head, food)) {
      incrementScore({ type: "increment-score" });
      setFood(generateFood());
      setSnakeArray(growSnake(tail, snakeArray, state.direction));
    } else {
      return;
    }
  }, [snakeArray, food, state.direction, incrementScore]);

  useEffect(() => {
    function isOffBoard(head) {
      if (
        head.top < 0 ||
        head.top >= 400 ||
        head.left < 0 ||
        head.left >= 400
      ) {
        return true;
      } else {
        return false;
      }
    }
    function hasCrashed(head, snakeArray) {
      for (let i = 0; i < snakeArray.length - 1; i++) {
        if (
          head.top === snakeArray[i].top &&
          head.left === snakeArray[i].left
        ) {
          return true;
        }
      }
      return false;
    }

    let head = snakeArray[snakeArray.length - 1];
    if (isOffBoard(head)) {
      setIsDead(true);
    } else if (hasCrashed(head, snakeArray)) {
      setIsDead(true);
    } else {
      return;
    }
  }, [snakeArray]);

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

    if (isDead) {
      return;
    } else {
      let timer = setTimeout(snakeMove, 100);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [snakeArray, state.direction, isDead]);

  return (
    <>
      <div>
        {snakeArray.map((coord) => (
          <SnakePart key={nanoid()} coords={coord} />
        ))}
      </div>
      <Food coords={food} />
    </>
  );
};

export default Snake;
