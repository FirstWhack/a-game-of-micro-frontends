import {
  CONSTANTS,
  GamePlugin,
  GameStore,
  LazyPluginProvider,
} from "@micro-snake/engine";
import { observer } from "mobx-react";
import React from "react";
import { Layer, Rect } from "react-konva";

const FPS_PENALTY = 2;
const PENALTY_TIMEOUT = 5000;

const PunishingPlum: GamePlugin = observer(function ({
  gameStore,
}: {
  gameStore: GameStore;
}) {
  const { playerPosition, setFPS, getRandomPosition } =
    gameStore;

  const [plumPosition, setPlumPosition] = React.useState(getRandomPosition());

  React.useEffect(() => {
    if (
      plumPosition.x === playerPosition.x &&
      plumPosition.y === playerPosition.y
    ) {
      // move the plum
      setPlumPosition(getRandomPosition);
      // penalize by increasing speed
      setFPS(gameStore.fps + FPS_PENALTY);
      // eventually remove the penalty
      setTimeout(() => setFPS(gameStore.fps - FPS_PENALTY), PENALTY_TIMEOUT);
    }
  }, [plumPosition, playerPosition]);

  return (
    <Layer>
      {/* plum */}
      <Rect
        stroke="purple"
        width={CONSTANTS.tileSize}
        height={CONSTANTS.tileSize}
        x={plumPosition.x * CONSTANTS.gridSize}
        y={plumPosition.y * CONSTANTS.gridSize}
      />
    </Layer>
  );
});

export default () => (
  <LazyPluginProvider Plugin={PunishingPlum} asyncLoad={() => import("engine/Store")} />
);
