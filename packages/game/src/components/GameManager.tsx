import { GamePlugin } from '@micro-snake/engine';
import { observer } from 'mobx-react';
import * as React from 'react';
import { dynamicImport, getRemoteEntryUrl } from '../utils/federatedImport';
import Game from './Game';

export interface PluginState {
  enabled: boolean;
  fqdn: string;
  module: string;
  scope: string;
  Component: React.LazyExoticComponent<GamePlugin>;
}

export interface Plugins {
  [moduleName: string]: PluginState;
}

// manage game plugins for the game
const GameManager = observer(function () {
  const [plugins, setPlugins] = React.useState<{
    [pluginName: string]: PluginState;
  }>({
    Apple: {
      Component: React.lazy<GamePlugin>(() =>
        dynamicImport(getRemoteEntryUrl(1338), 'apple', 'Apple')
      ),
      enabled: false,
      fqdn: getRemoteEntryUrl(1338),
      module: 'Apple',
      scope: 'apple'
    },
    Orange: {
      Component: React.lazy<GamePlugin>(() =>
        dynamicImport(getRemoteEntryUrl(1341), 'orange', 'Orange')
      ),
      enabled: false,
      fqdn: getRemoteEntryUrl(1341),
      module: 'Orange',
      scope: 'orange'
    }
  });

  const handleAddPlugin = React.useCallback(
    (
      fqdn: PluginState['fqdn'],
      scope: string,
      module: PluginState['module']
    ) => {
      setPlugins((state) => {
        if (state[module]) {
          console.warn(`${module} already exists, did nothing`);
          return state;
        }
        return {
          ...state,
          [module]: {
            fqdn,
            enabled: true,
            module,
            scope,
            Component: React.lazy<GamePlugin>(() =>
              dynamicImport(fqdn, scope, module)
            )
          }
        };
      });
    },
    [plugins]
  );

  const handleSubmit = React.useCallback<
    React.FormEventHandler<HTMLFormElement>
  >((event) => {
    const formData = new FormData(event.target as HTMLFormElement);
    const fqdn = formData.get('fqdn');
    const scope = formData.get('scope');
    const module = formData.get('module');
    if (fqdn && scope && module) {
      handleAddPlugin(String(fqdn), String(scope), String(module));
    }

    console.log(event);
    event.preventDefault();
  }, []);

  return (
    <>
      <section>
        <Game plugins={plugins} />
      </section>
      <section>
        Active Plugins:
        <table>
          <thead>
            <tr>
              <td>FQDN</td>
              <td>Scope</td>
              <td>Module</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {Object.values(plugins).map(({ module, fqdn, scope, enabled }) => {
              return (
                <tr key={module}>
                  <td>
                    <pre>{fqdn}</pre>
                  </td>
                  <td>{scope}</td>
                  <td>{module}</td>
                  <td>{enabled ? 'Active' : 'Inactive'}</td>
                  <td>
                    <button
                      onClick={() => {
                        setPlugins((state) => {
                          state[module].enabled = !state[module].enabled;
                          return { ...state };
                        });
                      }}
                    >
                      Toggle
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          Add plugins:
          <label>
            FQDN: <input name='fqdn' />
          </label>
          <label>
            Scope: <input name='scope' />
          </label>
          <label>
            Module: <input name='module' />
          </label>
          <button type='submit'>Submit</button>
          <pre>Example: Plum plugin is at //localhost:1340, plum, Plum</pre>
        </form>
      </section>
    </>
  );
});

export default GameManager;
