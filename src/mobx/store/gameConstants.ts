const START_FPS = 6;

export const CONSTANTS = {
  gridSize: 30,
  tileSizeMultiplier: 0.5,
  get tileSize() {
    return this.gridSize * this.tileSizeMultiplier;
  },
  get canvasSize() {
    return this.gridSize * this.gridSize;
  },
  get startPosition() {
    return { x: this.gridSize / 2, y: this.gridSize / 2 };
  },
  startFps: 6,
  startTailSize: 5,
};

export interface Velocity {
  x: number;
  y: number;
}

export interface GameState {
  playerPosition: { x: number; y: number };
  trail: { x: number; y: number }[];
  tailSize: number;
  velocity: {
    x: number;
    y: number;
  };
  fps: number;
  frameInterval: number;
  lastFrameTime: number;
  running: boolean;
}

export const velocityByKeyCode: { [key: number]: Velocity } = {
  // these should really account for the tileSize 
  37: { x: -1, y: 0 },
  38: { x: 0, y: -1 },
  39: { x: 1, y: 0 },
  40: { x: 0, y: 1 },
};
