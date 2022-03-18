import { observer } from "mobx-react";
import * as React from "react";
import { Layer, Rect, Stage, Text } from "react-konva";
import { CONSTANTS, Velocity, velocityByKeyCode } from "../store/gameConstants";
import { APIStoreContext } from "../store/gameStore";
import RewardApple from "./RewardApple";
import PunishingPlum from "./PunishingPlum";

const handleKeyDown = (
  setVelocity: (velocity: Velocity) => void,
  { keyCode }: React.KeyboardEvent<HTMLDivElement>
) => {
  if (velocityByKeyCode[keyCode]) {
    setVelocity(velocityByKeyCode[keyCode]);
  }
};

export default observer(function Snake() {
  const APIStore = React.useContext(APIStoreContext);

  const { playerPosition, setVelocity, trail, setFPS, setTailSize, tailSize } =
    APIStore;

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
        <RewardApple />
        <PunishingPlum />
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
