import { Coords } from "../components/Stage/Stage";

let inputDirection: Coords = { x: 0, y: 0 };
let lastInputDirection: Coords = { x: 0, y: 0 };

export const setInputs = () => {
  window.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
        if (lastInputDirection.y === 1) break;
        setInputDirection({ x: 0, y: -1 });
        break;
      case "ArrowDown":
        if (lastInputDirection.y === -1) break;
        setInputDirection({ x: 0, y: 1 });

        break;
      case "ArrowLeft":
        if (lastInputDirection.x === 1) break;
        setInputDirection({ x: -1, y: 0 });
        break;
      case "ArrowRight":
        if (lastInputDirection.x === -1) break;
        setInputDirection({ x: 1, y: 0 });
        break;
      default:
        break;
    }
  });
};

export function setInputDirection(direction: Coords) {
  inputDirection = direction;
}

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
