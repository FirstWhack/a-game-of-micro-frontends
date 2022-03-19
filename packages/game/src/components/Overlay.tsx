// import RewardApple from "./RewardApple";
// import PunishingPlum from "./PunishingPlum";
import { CONSTANTS, GamePlugin, GameStore } from '@micro-snake/engine';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Layer, Text } from 'react-konva';

// const OVERLAY_HEIGHT = 20;

const Overlay: React.FunctionComponent<{
  gameStore: GameStore;
  allowPause?: boolean;
}> = observer(function ({ gameStore, allowPause = false }) {
  const { score, running, suspendGame, startGame } = gameStore;

  return (
    <Layer>
      {/* Overlay/Score */}
      <Text text={`Score: ${score}`} fill='white' padding={10} />
      {allowPause && (
        <Text
          text={running ? 'Pause' : 'Resume'}
          fill='white'
          padding={10}
          onClick={running ? suspendGame : startGame}
          width={CONSTANTS.canvasSize}
          align='right'
        />
      )}
    </Layer>
  );
});

export default Overlay;
