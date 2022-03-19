import React from 'react';
import { GamePlugin, GameStore } from './gameStore';

export type LazyPluginProvider = React.FunctionComponent<{
  Plugin: GamePlugin;
  asyncLoad: () => Promise<{ GameStoreInstance: GameStore }>;
}>;

export const LazyPluginProvider: LazyPluginProvider = ({
  Plugin,
  asyncLoad
}) => {
  const [gameStore, setGameStore] = React.useState<GameStore | null>(null);

  React.useEffect(() => {
    asyncLoad().then((module) => setGameStore(module.GameStoreInstance));
  }, []);

  return gameStore ? <Plugin gameStore={gameStore} /> : null;
};
