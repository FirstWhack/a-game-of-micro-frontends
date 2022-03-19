import { CONSTANTS, GamePlugin, GameStore } from '@micro-snake/engine';
import { observer } from 'mobx-react';
import React from 'react';
import { Rect } from 'react-konva';

const FPS_PENALTY = 2;
const PENALTY_TIMEOUT = 5000;

const PunishingPlum: GamePlugin = observer(function ({
  gameStore
}: {
  gameStore: GameStore;
}) {
  const { playerPosition, setFPS, getRandomPosition } = gameStore;

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
    <Rect
      stroke='purple'
      width={CONSTANTS.tileSize}
      height={CONSTANTS.tileSize}
      x={plumPosition.x * CONSTANTS.gridSize}
      y={plumPosition.y * CONSTANTS.gridSize}
    />
  );
});

export default PunishingPlum;
