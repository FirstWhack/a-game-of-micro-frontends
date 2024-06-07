import {
  CONSTANTS,
  GameState,
  GameStore,
  LazyPluginProvider,
  velocityByKeyCode
} from '@micro-snake/engine';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Layer, Rect, Stage } from 'react-konva';
import { Plugins } from './GameManager';
import Overlay from './Overlay';

const maybeGetVelocityFromKeyDown = (
  { keyCode }: React.KeyboardEvent<HTMLDivElement>,
  currentVelocity: GameState['velocity']
) => {
  const newVelocity = velocityByKeyCode[keyCode];

  if (
    newVelocity &&
    // no "reverse"
    (currentVelocity.x === 0 || currentVelocity.x !== -newVelocity.x) &&
    (currentVelocity.y === 0 || currentVelocity.y !== -newVelocity.y)
  ) {
    return velocityByKeyCode[keyCode];
  }
};

const Snake: React.FunctionComponent<{
  gameStore: GameStore;
  plugins?: Plugins;
}> = observer(function ({ gameStore, plugins = {} }) {
  const { playerPosition, setVelocity, trail, setFPS, setTailSize, velocity } =
    gameStore;

  React.useEffect(() => {
    // check to see if the head has contacted any part of the body
    if (
      trail
        .slice(0, trail.length - 1)
        .some(
          ({ x: tx, y: ty }) =>
            tx === playerPosition.x && ty === playerPosition.y
        )
    ) {
      // punish the snake
      setTailSize(CONSTANTS.startTailSize);
      setFPS(CONSTANTS.startFps);
    }
  }, [playerPosition, trail]);

  const handleKeyDownMemo = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const newVelocity = maybeGetVelocityFromKeyDown(event, velocity);
      if (newVelocity) {
        setVelocity(newVelocity);
      }
    },
    [velocity]
  );

  return (
    <div style={{ outline: 'none' }} onKeyDown={handleKeyDownMemo} tabIndex={1}>
      <Stage width={CONSTANTS.canvasSize} height={CONSTANTS.canvasSize}>
        <Layer>
          {/* background */}
          <Rect
            width={CONSTANTS.canvasSize}
            height={CONSTANTS.canvasSize}
            fill='black'
          />
        </Layer>
        <Layer>
          {/* snake */}
          {trail.map(({ x, y }, i) => (
            <Rect
              key={i}
              fill='lime'
              width={CONSTANTS.tileSize}
              height={CONSTANTS.tileSize}
              x={x * CONSTANTS.gridSize}
              y={y * CONSTANTS.gridSize}
            />
          ))}
        </Layer>
        {/* add remote plugins */}
        {Object.values(plugins)
          .filter(({ enabled }) => enabled)
          .map(({ Component, module }) => (
            <React.Suspense fallback={null} key={module}>
              <Component />
            </React.Suspense>
          ))}
        {/* this is a local plugin */}
        <Overlay gameStore={gameStore} />
      </Stage>
    </div>
  );
});

export default ({ plugins }: { plugins?: Plugins }) => (
  <LazyPluginProvider
    Plugin={Snake}
    plugins={plugins}
    asyncLoad={() => import('engine/Store')}
  />
);
