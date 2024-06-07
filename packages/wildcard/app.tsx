import {
  CONSTANTS,
  GamePlugin,
  GameStore,
  LazyPluginProvider
} from '@micro-snake/engine';
import { observer } from 'mobx-react';
import React from 'react';
import { Layer, Star } from 'react-konva';

const REDUCTION_AMOUNT = 2;
const REDUCTION_LENGTH = 5000;

const Teleport: GamePlugin = observer(function ({
  gameStore
}: {
  gameStore: GameStore;
}) {
  const { playerPosition, setFPS, getRandomPosition, setPlayerPosition } =
    gameStore;

  const [teleportPosition, setPlumPosition] = React.useState(
    getRandomPosition()
  );

  React.useEffect(() => {
    if (
      teleportPosition.x === playerPosition.x &&
      teleportPosition.y === playerPosition.y
    ) {
      // move the teleport
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
  }, [teleportPosition, playerPosition]);

  const starSize = CONSTANTS.tileSize / 2;

  return (
    <Layer>
      {
        <Star
          innerRadius={starSize}
          numPoints={5}
          outerRadius={starSize}
          offset={{ x: -starSize, y: -starSize }}
          stroke='orange'
          width={starSize}
          height={starSize}
          x={teleportPosition.x * CONSTANTS.gridSize}
          y={teleportPosition.y * CONSTANTS.gridSize}
        />
      }
    </Layer>
  );
});

export { Teleport };
export default (() => <LazyPluginProvider
    Plugin={Teleport}
    asyncLoad={() => import('engine/Store')}
  />
);
