import { CONSTANTS as GameConstants } from "@micro-snake/engine";
import React from "react";
import ReactDOM from "react-dom";
import { Stage } from "react-konva";
import App from "./app";

ReactDOM.render(
  <Stage width={GameConstants.canvasSize} height={GameConstants.canvasSize}>
    <App />
  </Stage>,
  document.getElementById("root")
);
