import {
  CONSTANTS as GameConstants,
  LazyPluginProvider
} from '@micro-snake/engine';
import React from 'react';
import ReactDOM from 'react-dom';
import { Stage } from 'react-konva';
import { Teleport } from './app';

ReactDOM.render(
  <Stage width={GameConstants.canvasSize} height={GameConstants.canvasSize}>
    <LazyPluginProvider
      Plugin={Teleport}
      asyncLoad={() => import('engine/Store')}
    />
  </Stage>,
  document.getElementById('root')
);
