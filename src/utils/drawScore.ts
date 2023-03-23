import { Application, Container, Text } from "pixi.js";
import colors from "./colors";

const drawScore = (
  app: Application,
  score: number,
  topScore: number,
  size: number
) => {
  const scoreDisplay = new Text(`score: ${score}`, { fill: colors.cornsilk });
  scoreDisplay.anchor.x = 0.5;
  scoreDisplay.position.x = size / 3;

  const topScoreDisplay = new Text(`top score: ${topScore}`, {
    fill: colors.cornsilk,
  });
  topScoreDisplay.anchor.x = 0.5;
  topScoreDisplay.position.x = size / 1.5;

  const container = new Container();
  container.position.y = 30;

  container.addChild(scoreDisplay, topScoreDisplay);

  app.stage.addChild(container);
};

export default drawScore;
