import * as React from 'react';
import { render } from 'react-dom';
import GameManager from './components/GameManager';
import '../styles.less';

const rootElement = document.getElementById('root');
render(
  <main>
    <section>
      <GameManager />
    </section>
  </main>,
  rootElement
);
