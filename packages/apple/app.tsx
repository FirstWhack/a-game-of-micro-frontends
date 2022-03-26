import {
  CONSTANTS as GameConstants,
  GamePlugin,
  GameStore,
  LazyPluginProvider
} from '@micro-snake/engine';
import { observer } from 'mobx-react';
import React from 'react';
import { Layer, Rect } from 'react-konva';

const Apple: GamePlugin = observer(function ({
  gameStore
}: {
  gameStore: GameStore;
}) {
  const { playerPosition, tailSize, setTailSize, setFPS, getRandomPosition } =
    gameStore;

  const [applePosition, setApplePosition] = React.useState(getRandomPosition());

  React.useEffect(() => {
    if (
      applePosition.x === playerPosition.x &&
      applePosition.y === playerPosition.y
    ) {
      setTailSize(tailSize + 1);
      setApplePosition(getRandomPosition());
      setFPS(gameStore.fps + 1);
    }
  }, [applePosition, playerPosition]);

  return (
    <Layer>
      <Rect
        fill='red'
        width={GameConstants.tileSize}
        height={GameConstants.tileSize}
        x={applePosition.x * GameConstants.gridSize}
        y={applePosition.y * GameConstants.gridSize}
      />
    </Layer>
  );
});

export default Apple;
