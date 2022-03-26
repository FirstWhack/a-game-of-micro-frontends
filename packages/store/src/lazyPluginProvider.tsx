import React from 'react';
import { GamePlugin, GameStore } from './gameStore';

export type LazyPluginProvider = React.FunctionComponent<{
  Plugin: GamePlugin;
  asyncLoad: () => Promise<{ GameStoreInstance: GameStore }>;
  [rest: string]: any;
}>;

export const LazyPluginProvider: LazyPluginProvider = ({
  Plugin,
  asyncLoad,
  ...rest
}) => {
  const [gameStore, setGameStore] = React.useState<GameStore | null>(null);

  React.useEffect(() => {
    asyncLoad().then((module) => setGameStore(module.GameStoreInstance));
  }, []);

  return gameStore ? <Plugin gameStore={gameStore} {...rest} /> : null;
};
