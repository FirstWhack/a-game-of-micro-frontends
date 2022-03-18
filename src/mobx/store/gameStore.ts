import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  action,
  computed,
  configure,
  makeObservable,
  observable,
  onBecomeObserved,
  onBecomeUnobserved,
} from "mobx";
import { createContext } from "react";
import { CONSTANTS, GameState } from "./gameConstants";

// without configuring enforceActions it would be possible to modify any observable from anywhere
configure({ enforceActions: "observed" });

// base class
class APIStore implements GameState {
  gridSize = CONSTANTS.gridSize;
  // initial game state, player is centered with no velocity
  playerPosition = CONSTANTS.startPosition;
  velocity = {
    x: 0,
    y: 0,
  };
  trail = [CONSTANTS.startPosition];
  tailSize = CONSTANTS.startTailSize;
  // housekeeping to control animation
  running = false;
  // use to control fps and therefore game speed
  lastFrameTime = Date.now();
  fps = CONSTANTS.startFps;
  get frameInterval() {
    return 1000 / this.fps;
  }

  constructor() {
    makeObservable(this, {
      playerPosition: observable,
      trail: observable,
      frameInterval: computed
    });

    // setup lazy observables
    onBecomeObserved(this, "playerPosition", this.startGame);
    onBecomeUnobserved(this, "playerPosition", this.suspendGame);
  }
  suspendGame = action(() => {
    this.running = false;
  });
  startGame = () => {
    this.running = true;
    this.tick();
  };
  tick = () => {
    // render loop control
    if (this.running) {
      requestAnimationFrame(() => this.tick());
      const now = Date.now();
      const elapsed = now - this.lastFrameTime;
      // render speed control
      if (elapsed > this.frameInterval) {
        this.lastFrameTime = now - (elapsed % this.frameInterval);

        this.updatePlayerPosition(this.playerPosition, this.velocity);
      }
    }
  };

  updatePlayerPosition = action(
    (
      { x: px, y: py }: GameState["playerPosition"],
      { x: vx, y: vy }: GameState["velocity"]
    ) => {
      if (vx || vy) {
        const newPlayerPosition = {
          x: px + vx,
          y: py + vy,
        };

        if (newPlayerPosition.x < 0) {
          newPlayerPosition.x = this.gridSize - 1;
        }
        if (newPlayerPosition.x > this.gridSize - 1) {
          newPlayerPosition.x = 0;
        }
        if (newPlayerPosition.y < 0) {
          newPlayerPosition.y = this.gridSize - 1;
        }
        if (newPlayerPosition.y > this.gridSize - 1) {
          newPlayerPosition.y = 0;
        }

        this.playerPosition = newPlayerPosition;
        this.trail = this.trail.concat(newPlayerPosition).slice(-this.tailSize);
      }
    }
  );

  setVelocity = action((newVelocity: GameState["velocity"]) => {
    this.velocity = newVelocity;
  });
  setTailSize = action((tailSize: GameState["tailSize"]) => {
    this.tailSize = tailSize;
  });
  setFPS = action((fps: GameState["fps"]) => {
    this.fps = fps;
  });
}

// all references should point to this singleton.
// If store is accessed outside of useContext (e.g. outside of React) you need to use this instance (unless you want multiple stores)!
export const APIStoreInstance = new APIStore();

export const APIStoreContext = createContext(APIStoreInstance);
