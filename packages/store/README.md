# Snake GameStore

This module holds a game engine for Snake, it is a simple MobX store exposing observables and methods to modify the game state.
No output is rendered by this module.

## Usage

### required

- MobX

Import the `GameStoreInstance` or instantiate a new `GameStore`, you will need to [observe](https://mobx.js.org/observable-state.html) the GameState and render an output.

### Public API

- methods:
  - `setPlayerPosition()` - update the player's position to a new Vector2d
  - `getRandomPosition()` - always returns a _new_ random Vector2d within the bounds of play area
  - `setVelocity()` - update the player velocity
  - `setFPS()` - set the game speed
  - `setTailSize()` - update the maximum tail size
  - `suspendGame()` - suspends (does not destroy) the current game
  - `startGame()` - starts the game, safe to call even if game is already started
- Properties:
  - `gridSize` - the current grid size (defaults to 20)
  - [observable] `playerPosition` - Vector2d position of the player
  - [observable] `trail` - list of all coordinates that are part of the curent Player Trail
  - `fps` - the current game speed
  - [computed] `frameInterval` - the frameInterval in-use by the render engine, computed based on the value of `fps`
  - `running` - determines whether the render loop is executing
  - [observable] `tailSize` - the maximum size of the player's tail
  - [computed] `score` - the tail size minus starting tail size
  - `lastFrameTime` - the time of the last frame render, used by the render engine to control game/render speed
  - `velocity` - Current Velocity2d of the player. e.g. `{x: 1, y: 0}` = player is moving to the "right" by 1 tile at a time
