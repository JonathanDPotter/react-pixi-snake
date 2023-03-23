import * as PIXI from "pixi.js";
import Snake from "../objects/snake";
import Food from "../objects/food";
import colors from "./colors";

const drawGame = (
  app: PIXI.Application,
  snake: Snake,
  food: Food,
  squareSize: number
) => {
  snake.body.forEach((position) => {
    const segment = new PIXI.Graphics()
      .beginFill(colors.pakistanGreen)
      .drawRect(0, 0, squareSize, squareSize)
      .endFill();

    segment.position = {
      x: (position.x - 1) * squareSize,
      y: (position.y - 1) * squareSize,
    };

    app.stage.addChild(segment);
  });

  const foodSprite = new PIXI.Graphics()
    .beginFill(colors.earthYellow)
    .drawRect(0, 0, squareSize, squareSize)
    .endFill();

  foodSprite.position = food.position
    ? {
        x: (food.position.x - 1) * squareSize,
        y: (food.position.y - 1) * squareSize,
      }
    : { x: 0, y: 0 };

  app.stage.addChild(foodSprite);
};

export default drawGame;
