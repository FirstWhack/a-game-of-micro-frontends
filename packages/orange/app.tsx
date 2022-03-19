import {
  CONSTANTS,
  GamePlugin,
  GameStore,
  LazyPluginProvider,
} from "@micro-snake/engine";
import { observer } from "mobx-react";
import React from "react";
import { Layer, Rect, Star } from "react-konva";

const REDUCTION_AMOUNT = 2;
const REDUCTION_LENGTH = 5000;

const MIN_SCORE = 2;

const TeleportingOrange: GamePlugin = observer(function ({
  gameStore,
}: {
  gameStore: GameStore;
}) {
  const {
    playerPosition,
    setFPS,
    getRandomPosition,
    setPlayerPosition,
    score,
  } = gameStore;

  const [orangePosition, setPlumPosition] = React.useState(getRandomPosition());

  React.useEffect(() => {
    if (
      score >= MIN_SCORE &&
      orangePosition.x === playerPosition.x &&
      orangePosition.y === playerPosition.y
    ) {
      // move the orange
      setPlumPosition(getRandomPosition);
      // teleport the player
      setPlayerPosition(getRandomPosition());
      // temporarily decrease speed for better survival odds
      setFPS(gameStore.fps - REDUCTION_AMOUNT);
      // eventually remove the speed buff
      setTimeout(
        () => setFPS(gameStore.fps + REDUCTION_AMOUNT),
        REDUCTION_LENGTH
      );
    }
  }, [orangePosition, playerPosition]);

  const starSize = CONSTANTS.tileSize / 2;

  return (
    <Layer>
      {/* orange */}
      {score >= MIN_SCORE && (
        <Star
          innerRadius={starSize}
          numPoints={5}
          outerRadius={starSize}
          offset={{ x: -starSize, y: -starSize }}
          stroke="orange"
          width={starSize}
          height={starSize}
          x={orangePosition.x * CONSTANTS.gridSize}
          y={orangePosition.y * CONSTANTS.gridSize}
        />
      )}
    </Layer>
  );
});

export default () => (
  <LazyPluginProvider
    Plugin={TeleportingOrange}
    asyncLoad={() => import("engine/Store")}
  />
);
