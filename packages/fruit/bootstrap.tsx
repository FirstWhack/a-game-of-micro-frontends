import {
  CONSTANTS as GameConstants,
  LazyPluginProvider
} from '@micro-snake/engine';
import React from 'react';
import ReactDOM from 'react-dom';
import { Stage } from 'react-konva';
import Apple from './src/components/apple/apple';
import Plums from './src/components/plum/plumContainer';

const storePromise = import('engine/Store');

ReactDOM.render(
  <Stage width={GameConstants.canvasSize} height={GameConstants.canvasSize}>
    <LazyPluginProvider Plugin={Apple} asyncLoad={() => storePromise} />
    <LazyPluginProvider Plugin={Plums} asyncLoad={() => storePromise} />
  </Stage>,
  document.getElementById('root')
);
