// import RewardApple from "./RewardApple";
// import PunishingPlum from "./PunishingPlum";
import {
  CONSTANTS,
  GamePlugin,
  GameState,
  GameStore,
  LazyPluginProvider,
  velocityByKeyCode,
} from "@micro-snake/engine";
import { observer } from "mobx-react";
import * as React from "react";
import { Layer, Rect, Stage, Text } from "react-konva";

const handleKeyDown = (
  setVelocity: (velocity: GameState["velocity"]) => void,
  { keyCode }: React.KeyboardEvent<HTMLDivElement>
) => {
  if (velocityByKeyCode[keyCode]) {
    setVelocity(velocityByKeyCode[keyCode]);
  }
};

const Snake: GamePlugin = observer(function ({
  gameStore,
}: {
  gameStore: GameStore;
}) {
  const [plugins, setPlugins] = React.useState<(() => JSX.Element)[]>([]);
  const { playerPosition, setVelocity, trail, setFPS, setTailSize, tailSize } =
    gameStore;

  // dynamically load all plugins
  // TODO: Runtime plugin management
  React.useEffect(() => {
    Promise.all([
      import("apple/Apple"),
      import("plum/Plum"),
      import("orange/Orange"),
    ]).then((resolvedPlugins) => {
      setPlugins(
        plugins.concat(resolvedPlugins.map((plugin) => plugin.default))
      );
    });
  }, []);

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
      className="snake"
      onKeyDown={handleKeyDown.bind(null, setVelocity)}
      tabIndex={1}
    >
      <Stage width={CONSTANTS.canvasSize} height={CONSTANTS.canvasSize}>
        <Layer>
          {/* background */}
          <Rect
            width={CONSTANTS.canvasSize}
            height={CONSTANTS.canvasSize}
            fill="black"
          />
        </Layer>
        <Layer>
          {/* snake */}
          {trail.map(({ x, y }) => (
            <Rect
              fill="lime"
              width={CONSTANTS.tileSize}
              height={CONSTANTS.tileSize}
              x={x * CONSTANTS.gridSize}
              y={y * CONSTANTS.gridSize}
            />
          ))}
        </Layer>
        {plugins.map((Plugin) => (
          <Plugin />
        ))}
        {/* <RewardApple /> */}
        {/* <PunishingPlum /> */}
        <Layer>
          {/* Overlay/Score */}
          <Text
            text={`Score: ${tailSize - CONSTANTS.startTailSize}`}
            fill="white"
            padding={10}
          />
        </Layer>
      </Stage>
    </div>
  );
});

export default () => (
  <LazyPluginProvider Plugin={Snake} asyncLoad={() => import("engine/Store")} />
);
