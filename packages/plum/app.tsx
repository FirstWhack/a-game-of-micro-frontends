import { GamePlugin, GameStore } from '@micro-snake/engine';
import { observer } from 'mobx-react';
import React from 'react';
import { Layer } from 'react-konva';
import PunishingPlum from './plum';

const MIN_PLUMS = 1;
const PLUM_SCORE_MULTIPLIER = 0.25;

const PlumContainer: GamePlugin = observer(function ({
  gameStore
}: {
  gameStore: GameStore;
}) {
  const { score } = gameStore;

  const plums = React.useMemo(
    () =>
      Array.from(
        Array(Math.max(Math.ceil(score * PLUM_SCORE_MULTIPLIER), MIN_PLUMS)),
        () => <PunishingPlum gameStore={gameStore} />
      ),
    [score]
  );

  return (
    <Layer>
      {/* plum */}
      {plums}
    </Layer>
  );
});

export default PlumContainer;
