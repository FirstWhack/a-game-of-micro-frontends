import { reaction } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import { Layer, Rect } from "react-konva";
import { CONSTANTS } from "../store/gameConstants";
import { APIStoreContext } from "../store/gameStore";

const getRandomPosition = (size: number) => {
  return {
    x: Math.floor(Math.random() * size),
    y: Math.floor(Math.random() * size),
  };
};

export default observer(function Snake() {
  const APIStore = React.useContext(APIStoreContext);
  const { playerPosition, tailSize, setTailSize, gridSize, setFPS } =
    APIStore;

  const [applePosition, setApplePosition] = React.useState(
    getRandomPosition(gridSize)
  );

  React.useEffect(() => {
    if (
      applePosition.x === playerPosition.x &&
      applePosition.y === playerPosition.y
    ) {
      setTailSize(tailSize + 1);
      setApplePosition(getRandomPosition(gridSize));
      setFPS(APIStore.fps + 1);
    }
  }, [applePosition, playerPosition]);

  return (
    <Layer>
      {/* apple */}
      <Rect
        fill="red"
        width={CONSTANTS.tileSize}
        height={CONSTANTS.tileSize}
        x={applePosition.x * CONSTANTS.gridSize}
        y={applePosition.y * CONSTANTS.gridSize}
      />
    </Layer>
  );
});
