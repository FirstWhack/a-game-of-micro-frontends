import {
  CONSTANTS as GameConstants,
  LazyPluginProvider
} from '@micro-snake/engine';
import React from 'react';
import ReactDOM from 'react-dom';
import { Stage } from 'react-konva';
import App from './app';

ReactDOM.render(
  <Stage width={GameConstants.canvasSize} height={GameConstants.canvasSize}>
    <LazyPluginProvider Plugin={App} asyncLoad={() => import('engine/Store')} />
  </Stage>,
  document.getElementById('root')
);
