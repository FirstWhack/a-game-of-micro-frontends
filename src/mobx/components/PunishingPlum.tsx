import { observer } from "mobx-react";
import * as React from "react";
import { Layer, Rect, Star } from "react-konva";
import { CONSTANTS } from "../store/gameConstants";
import { APIStoreContext } from "../store/gameStore";

const getRandomPosition = (size: number) => {
  return {
    x: Math.floor(Math.random() * size),
    y: Math.floor(Math.random() * size),
  };
};

const FPS_PENALTY = 2;
const PENALTY_TIMEOUT = 5000;

export default observer(function Snake() {
  const APIStore = React.useContext(APIStoreContext);
  const { playerPosition, gridSize, setFPS } = APIStore;

  const [plumPosition, setPlumPosition] = React.useState(
    getRandomPosition(gridSize)
  );

  React.useEffect(() => {
    if (
      plumPosition.x === playerPosition.x &&
      plumPosition.y === playerPosition.y
    ) {
      // move the plum
      setPlumPosition(getRandomPosition(gridSize));
      // penalize by increasing speed
      setFPS(APIStore.fps + FPS_PENALTY);
      // eventually remove the penalty
      setTimeout(() => setFPS(APIStore.fps - FPS_PENALTY), PENALTY_TIMEOUT);
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
