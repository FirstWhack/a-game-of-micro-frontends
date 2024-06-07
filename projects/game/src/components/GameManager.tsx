import { GamePlugin, RemoteGamePlugin } from '@micro-snake/engine';
import {
  Button,
  Checkbox,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField
} from '@mui/material';
import * as React from 'react';
import { dynamicImport, getRemoteEntryUrl } from '../utils/federatedImport';
import Game from './Game';

export interface PluginState {
  enabled: boolean;
  fqdn: string;
  module: string;
  scope: string;
  Component: React.LazyExoticComponent<GamePlugin | RemoteGamePlugin>;
}

export interface Plugins {
  [moduleName: string]: PluginState;
}

// manage game plugins for the game
const GameManager = function () {
  const [plugins, setPlugins] = React.useState<{
    [pluginName: string]: PluginState;
  }>({
    Apple: {
      Component: React.lazy<RemoteGamePlugin>(() =>
        dynamicImport(getRemoteEntryUrl(1338, 'fruit'), 'fruit', 'Apple')
      ),
      enabled: true,
      fqdn: getRemoteEntryUrl(1338, 'fruit'),
      scope: 'fruit',
      module: 'Apple'
    },
    Teleport: {
      Component: React.lazy<RemoteGamePlugin>(() =>
        dynamicImport(
          getRemoteEntryUrl(1340, 'wildcard'),
          'wildcard',
          'Teleport'
        )
      ),
      enabled: false,
      fqdn: getRemoteEntryUrl(1340, 'wildcard'),
      scope: 'wildcard',
      module: 'Teleport'
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
            Component: React.lazy<RemoteGamePlugin>(() =>
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
    <Grid container>
      <Grid item xs={12} lg={4}>
        <Game plugins={plugins} />
      </Grid>
      <Grid container xs={12} lg={4} spacing={2}>
        <Grid item xs={12}>
          Active Plugins:
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell>FQDN</TableCell>
                <TableCell>Scope</TableCell>
                <TableCell>Module</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(plugins).map(
                ({ module, fqdn, scope, enabled }) => {
                  return (
                    <TableRow key={module}>
                      <TableCell>
                        <pre>{fqdn}</pre>
                      </TableCell>
                      <TableCell>{scope}</TableCell>
                      <TableCell>{module}</TableCell>
                      <TableCell>
                        <Checkbox
                          color={enabled ? 'success' : 'error'}
                          checked={enabled}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setPlugins((state) => {
                              state[module].enabled = event.target.checked;
                              return { ...state };
                            });
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={12}>
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            Add plugins:
            <TextField
              margin='dense'
              size='small'
              label='FQDN'
              name='fqdn'
              placeholder={getRemoteEntryUrl(1340, 'fruit')}
            />
            <TextField
              margin='dense'
              size='small'
              label='Scope'
              name='scope'
              placeholder='plum'
            />
            <TextField
              margin='dense'
              size='small'
              label='Module Name'
              name='module'
              placeholder='Plum'
            />
            <Button variant='contained' type='submit'>
              Add Plugin
            </Button>
            <pre>
              Example: Plum plugin is at {getRemoteEntryUrl(1338, 'fruit')},
              fruit, Plum
            </pre>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GameManager;
