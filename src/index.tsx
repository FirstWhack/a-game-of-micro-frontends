import * as React from "react";
import { render } from "react-dom";
import Game from "./mobx/components/Game";

const rootElement = document.getElementById("root");
render(
  <main>
    <section>
      <Game />
    </section>
  </main>,
  rootElement
);
