import { GamePlugin, GameStore, LazyPluginProvider } from "@micro-snake/engine";
import { observer } from "mobx-react";
import React from "react";
import { Layer } from "react-konva";
import PunishingPlum from "./plum";

const MIN_PLUMS = 2;
const PLUM_SCORE_MULTIPLIER = 0.25;

const PlumContainer: GamePlugin = observer(function ({
  gameStore,
}: {
  gameStore: GameStore;
}) {
  const { score } = gameStore;

  const plums = React.useMemo(
    () =>
      Array.from(Array(Math.ceil(score * PLUM_SCORE_MULTIPLIER)), () => (
        <PunishingPlum gameStore={gameStore} />
      )),
    [score]
  );

  return (
    <Layer>
      {/* plum */}
      {plums}
    </Layer>
  );
});

export default () => (
  <LazyPluginProvider
    Plugin={PlumContainer}
    asyncLoad={() => import("engine/Store")}
  />
);
