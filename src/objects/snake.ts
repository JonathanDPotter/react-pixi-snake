import { Coords } from "../components/Stage/Stage";
import { setInputDirection, getInputDirection } from "../utils/input";

export default class Snake {
  body: Coords[];
  newSegments: number;
  speed: number;

  constructor() {
    this.body = [{ x: 11, y: 11 }];
    this.newSegments = 0;
    this.speed = 7;
  }

  update() {
    this.addSegments();
    const inputDirection = getInputDirection();
    for (let i = this.body.length - 2; i >= 0; i--) {
      this.body[i + 1] = { ...this.body[i] };
    }
    this.body[0].x += inputDirection.x;
    this.body[0].y += inputDirection.y;
  }

  expandSnake(amount: number) {
    this.newSegments += amount;
  }

  onSnake(position: Coords, ignoreHead: boolean = false) {
    return this.body.some((segment, index) => {
      if (ignoreHead && index === 0) return false;
      return this.equalPositions(segment, position);
    });
  }

  equalPositions(pos1: Coords, pos2: Coords): boolean {
    return pos1.x === pos2.x && pos1.y === pos2.y;
  }

  addSegments() {
    for (let i = 0; i < this.newSegments; i++) {
      this.body.push({ ...this.body[this.body.length - 1] });
    }
    this.newSegments = 0;
  }

  setSpeed(newSpeed: number) {
    this.speed = newSpeed;
  }

  getSnakeHead(): Coords {
    return this.body[0];
  }

  snakeIntersection(): boolean {
    return this.onSnake(this.body[0], true);
  }

  reset() {
    this.body = [{ x: 11, y: 11 }];
    this.newSegments = 0;
    setInputDirection({ x: 0, y: 0 });
  }
}
