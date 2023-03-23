import React, { useEffect, useState } from "react";
import { useApp, useTick } from "@pixi/react";
import Snake from "../../objects/snake";
import Food from "../../objects/food";
import drawGame from "../../utils/drawGame";
import { outsideGrid } from "../../utils/grid";
import drawScore from "../../utils/drawScore";

const Game = ({ size }: { size: number }) => {
  const [squareSize, setSquareSize] = useState(size / 21);

  const snake = new Snake();
  const food = new Food();
  const app = useApp();
  const urlParams = new URLSearchParams(window.location.search);
  snake.setSpeed(parseInt(urlParams.get("speed")!));

  let score = 0;
  let topScore = 0;
  let elapsedTime = 0;

  const scoreOne = () => {
    score += 1;
  };

  const checkDeath = () => {
    if (outsideGrid(snake.getSnakeHead()) || snake.snakeIntersection()) {
      snake.reset();
      score > topScore && (topScore = score);
      score = 0;
    }
  };

  useTick((delta) => {
    elapsedTime += delta;

    if (elapsedTime >= snake.speed) {
      snake.update();
      food.update(snake, scoreOne);
      app.stage.removeChildren();
      checkDeath();
      drawGame(app, snake, food, squareSize);
      drawScore(app, score, topScore, size);
      elapsedTime = 0;
    }
  });

  useEffect(() => {
    setSquareSize(size / 21);
  }, [size]);

  return <></>;
};

export default Game;
