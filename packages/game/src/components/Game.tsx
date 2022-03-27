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

const handleKeyDown = (
  setVelocity: (velocity: GameState['velocity']) => void,
  { keyCode }: React.KeyboardEvent<HTMLDivElement>
) => {
  if (velocityByKeyCode[keyCode]) {
    setVelocity(velocityByKeyCode[keyCode]);
  }
};

const Snake: React.FunctionComponent<{
  gameStore: GameStore;
  plugins?: Plugins;
}> = observer(function ({ gameStore, plugins = {} }) {
  const { playerPosition, setVelocity, trail, setFPS, setTailSize, score } =
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

  return (
    <div
      style={{ outline: 'none' }}
      onKeyDown={handleKeyDown.bind(null, setVelocity)}
      tabIndex={1}
    >
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
              <Component gameStore={gameStore} />
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
