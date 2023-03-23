import React, { useEffect, useState } from "react";
import { Graphics, Stage, useTick } from "@pixi/react";
import * as PIXI from "pixi.js";
import getSize from "../../utils/getSize";
import "./Stage.scss";
import colors from "../../utils/colors";
import Game from "../Game/Game";
import { setInputs } from "../../utils/input";

export interface Coords {
  y: number;
  x: number;
}

const StageComponent = () => {
  const [size, setSize] = useState<number>(getSize);

  useEffect(() => {
    setSize(getSize);
  }, [window.innerHeight, window.innerWidth]);

  useEffect(() => {
    setInputs();
  });

  return (
    <div className="game">
      <Stage
        width={size}
        height={size}
        options={{ backgroundColor: colors.darkMossGreen }}
      >
        <Game {...{ size }} />
      </Stage>
    </div>
  );
};

export default StageComponent;
