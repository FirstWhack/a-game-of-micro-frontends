(self.webpackChunk_micro_snake_plugin_wildcard=self.webpackChunk_micro_snake_plugin_wildcard||[]).push([[705],{654:function(__unused_webpack_module,exports,__webpack_require__){"use strict";eval('\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\n__exportStar(__webpack_require__(648), exports);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjU0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQG1pY3JvLXNuYWtlL3BsdWdpbi13aWxkY2FyZC8uLi9zdG9yZS9pbmRleC50cz8xNzk4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc3JjXCIpLCBleHBvcnRzKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///654\n')},460:(__unused_webpack_module,exports)=>{"use strict";eval('\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.velocityByKeyCode = exports.CONSTANTS = void 0;\nexports.CONSTANTS = {\n    gridSize: 20,\n    tileSizeMultiplier: 0.9,\n    get tileSize() {\n        return this.gridSize * this.tileSizeMultiplier;\n    },\n    get canvasSize() {\n        return this.gridSize * this.gridSize;\n    },\n    get startPosition() {\n        return { x: this.gridSize / 2, y: this.gridSize / 2 };\n    },\n    startFps: 6,\n    startTailSize: 5\n};\nexports.velocityByKeyCode = {\n    // these should really account for the tileSize\n    37: { x: -1, y: 0 },\n    38: { x: 0, y: -1 },\n    39: { x: 1, y: 0 },\n    40: { x: 0, y: 1 }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQG1pY3JvLXNuYWtlL3BsdWdpbi13aWxkY2FyZC8uLi9zdG9yZS9zcmMvZ2FtZUNvbnN0YW50cy50cz9hMTMxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy52ZWxvY2l0eUJ5S2V5Q29kZSA9IGV4cG9ydHMuQ09OU1RBTlRTID0gdm9pZCAwO1xuZXhwb3J0cy5DT05TVEFOVFMgPSB7XG4gICAgZ3JpZFNpemU6IDIwLFxuICAgIHRpbGVTaXplTXVsdGlwbGllcjogMC45LFxuICAgIGdldCB0aWxlU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFNpemUgKiB0aGlzLnRpbGVTaXplTXVsdGlwbGllcjtcbiAgICB9LFxuICAgIGdldCBjYW52YXNTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkU2l6ZSAqIHRoaXMuZ3JpZFNpemU7XG4gICAgfSxcbiAgICBnZXQgc3RhcnRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5ncmlkU2l6ZSAvIDIsIHk6IHRoaXMuZ3JpZFNpemUgLyAyIH07XG4gICAgfSxcbiAgICBzdGFydEZwczogNixcbiAgICBzdGFydFRhaWxTaXplOiA1XG59O1xuZXhwb3J0cy52ZWxvY2l0eUJ5S2V5Q29kZSA9IHtcbiAgICAvLyB0aGVzZSBzaG91bGQgcmVhbGx5IGFjY291bnQgZm9yIHRoZSB0aWxlU2l6ZVxuICAgIDM3OiB7IHg6IC0xLCB5OiAwIH0sXG4gICAgMzg6IHsgeDogMCwgeTogLTEgfSxcbiAgICAzOTogeyB4OiAxLCB5OiAwIH0sXG4gICAgNDA6IHsgeDogMCwgeTogMSB9XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///460\n')},896:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GameStoreContext = exports.GameStoreInstance = exports.GameStore = void 0;\nvar mobx_1 = __webpack_require__(284);\nvar react_1 = __webpack_require__(691);\nvar gameConstants_1 = __webpack_require__(460);\n// without configuring enforceActions it would be possible to modify any observable from anywhere\n(0, mobx_1.configure)({ enforceActions: 'observed' });\n// base class\nvar GameStore = /** @class */ (function () {\n    function GameStore() {\n        var _this = this;\n        this.gridSize = gameConstants_1.CONSTANTS.gridSize;\n        // initial game state, player is centered with no velocity\n        this.playerPosition = gameConstants_1.CONSTANTS.startPosition;\n        this.velocity = {\n            x: 0,\n            y: 0\n        };\n        this.trail = [gameConstants_1.CONSTANTS.startPosition];\n        this.tailSize = gameConstants_1.CONSTANTS.startTailSize;\n        // housekeeping to control animation\n        this.running = false;\n        // use to control fps and therefore game speed\n        this.lastFrameTime = Date.now();\n        this.fps = gameConstants_1.CONSTANTS.startFps;\n        this.suspendGame = (0, mobx_1.action)(function () {\n            _this.running = false;\n        });\n        this.startGame = function () {\n            _this.running = true;\n            _this.tick();\n        };\n        this.tick = function () {\n            // render loop control\n            if (_this.running) {\n                requestAnimationFrame(function () { return _this.tick(); });\n                var now = Date.now();\n                var elapsed = now - _this.lastFrameTime;\n                // render speed control\n                if (elapsed > _this.frameInterval) {\n                    _this.lastFrameTime = now - (elapsed % _this.frameInterval);\n                    _this.updatePlayerPosition(_this.playerPosition, _this.velocity);\n                }\n            }\n        };\n        this.updatePlayerPosition = (0, mobx_1.action)(function (_a, _b) {\n            var px = _a.x, py = _a.y;\n            var vx = _b.x, vy = _b.y;\n            if (vx || vy) {\n                var newPlayerPosition = {\n                    x: px + vx,\n                    y: py + vy\n                };\n                if (newPlayerPosition.x < 0) {\n                    newPlayerPosition.x = _this.gridSize - 1;\n                }\n                if (newPlayerPosition.x > _this.gridSize - 1) {\n                    newPlayerPosition.x = 0;\n                }\n                if (newPlayerPosition.y < 0) {\n                    newPlayerPosition.y = _this.gridSize - 1;\n                }\n                if (newPlayerPosition.y > _this.gridSize - 1) {\n                    newPlayerPosition.y = 0;\n                }\n                _this.playerPosition = newPlayerPosition;\n                _this.trail = _this.trail.concat(newPlayerPosition).slice(-_this.tailSize);\n            }\n        });\n        this.setVelocity = (0, mobx_1.action)(function (newVelocity) {\n            _this.velocity = newVelocity;\n        });\n        this.setTailSize = (0, mobx_1.action)(function (tailSize) {\n            _this.tailSize = tailSize;\n        });\n        this.setFPS = (0, mobx_1.action)(function (fps) {\n            _this.fps = fps;\n        });\n        this.setPlayerPosition = (0, mobx_1.action)(function (newPlayerPosition) {\n            _this.playerPosition = newPlayerPosition;\n        });\n        this.getRandomPosition = function () { return ({\n            x: Math.floor(Math.random() * _this.gridSize),\n            y: Math.floor(Math.random() * _this.gridSize)\n        }); };\n        (0, mobx_1.makeObservable)(this, {\n            playerPosition: mobx_1.observable,\n            trail: mobx_1.observable,\n            tailSize: mobx_1.observable,\n            frameInterval: mobx_1.computed,\n            score: mobx_1.computed,\n            running: mobx_1.observable\n        });\n        // setup lazy observables\n        (0, mobx_1.onBecomeObserved)(this, 'playerPosition', this.startGame);\n        (0, mobx_1.onBecomeUnobserved)(this, 'playerPosition', this.suspendGame);\n    }\n    Object.defineProperty(GameStore.prototype, \"frameInterval\", {\n        get: function () {\n            return 1000 / this.fps;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(GameStore.prototype, \"score\", {\n        get: function () {\n            return this.tailSize - gameConstants_1.CONSTANTS.startTailSize;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return GameStore;\n}());\nexports.GameStore = GameStore;\n// all references should point to this singleton.\n// If store is accessed outside of useContext (e.g. outside of React) you need to use this instance (unless you want multiple stores)!\nexports.GameStoreInstance = new GameStore();\nexports.GameStoreContext = (0, react_1.createContext)(exports.GameStoreInstance);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODk2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQG1pY3JvLXNuYWtlL3BsdWdpbi13aWxkY2FyZC8uLi9zdG9yZS9zcmMvZ2FtZVN0b3JlLnRzPzIzZjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVTdG9yZUNvbnRleHQgPSBleHBvcnRzLkdhbWVTdG9yZUluc3RhbmNlID0gZXhwb3J0cy5HYW1lU3RvcmUgPSB2b2lkIDA7XG52YXIgbW9ieF8xID0gcmVxdWlyZShcIm1vYnhcIik7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBnYW1lQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9nYW1lQ29uc3RhbnRzXCIpO1xuLy8gd2l0aG91dCBjb25maWd1cmluZyBlbmZvcmNlQWN0aW9ucyBpdCB3b3VsZCBiZSBwb3NzaWJsZSB0byBtb2RpZnkgYW55IG9ic2VydmFibGUgZnJvbSBhbnl3aGVyZVxuKDAsIG1vYnhfMS5jb25maWd1cmUpKHsgZW5mb3JjZUFjdGlvbnM6ICdvYnNlcnZlZCcgfSk7XG4vLyBiYXNlIGNsYXNzXG52YXIgR2FtZVN0b3JlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdhbWVTdG9yZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5ncmlkU2l6ZSA9IGdhbWVDb25zdGFudHNfMS5DT05TVEFOVFMuZ3JpZFNpemU7XG4gICAgICAgIC8vIGluaXRpYWwgZ2FtZSBzdGF0ZSwgcGxheWVyIGlzIGNlbnRlcmVkIHdpdGggbm8gdmVsb2NpdHlcbiAgICAgICAgdGhpcy5wbGF5ZXJQb3NpdGlvbiA9IGdhbWVDb25zdGFudHNfMS5DT05TVEFOVFMuc3RhcnRQb3NpdGlvbjtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHJhaWwgPSBbZ2FtZUNvbnN0YW50c18xLkNPTlNUQU5UUy5zdGFydFBvc2l0aW9uXTtcbiAgICAgICAgdGhpcy50YWlsU2l6ZSA9IGdhbWVDb25zdGFudHNfMS5DT05TVEFOVFMuc3RhcnRUYWlsU2l6ZTtcbiAgICAgICAgLy8gaG91c2VrZWVwaW5nIHRvIGNvbnRyb2wgYW5pbWF0aW9uXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAvLyB1c2UgdG8gY29udHJvbCBmcHMgYW5kIHRoZXJlZm9yZSBnYW1lIHNwZWVkXG4gICAgICAgIHRoaXMubGFzdEZyYW1lVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuZnBzID0gZ2FtZUNvbnN0YW50c18xLkNPTlNUQU5UUy5zdGFydEZwcztcbiAgICAgICAgdGhpcy5zdXNwZW5kR2FtZSA9ICgwLCBtb2J4XzEuYWN0aW9uKShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMudGljaygpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyByZW5kZXIgbG9vcCBjb250cm9sXG4gICAgICAgICAgICBpZiAoX3RoaXMucnVubmluZykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy50aWNrKCk7IH0pO1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHZhciBlbGFwc2VkID0gbm93IC0gX3RoaXMubGFzdEZyYW1lVGltZTtcbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgc3BlZWQgY29udHJvbFxuICAgICAgICAgICAgICAgIGlmIChlbGFwc2VkID4gX3RoaXMuZnJhbWVJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXN0RnJhbWVUaW1lID0gbm93IC0gKGVsYXBzZWQgJSBfdGhpcy5mcmFtZUludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlUGxheWVyUG9zaXRpb24oX3RoaXMucGxheWVyUG9zaXRpb24sIF90aGlzLnZlbG9jaXR5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlUGxheWVyUG9zaXRpb24gPSAoMCwgbW9ieF8xLmFjdGlvbikoZnVuY3Rpb24gKF9hLCBfYikge1xuICAgICAgICAgICAgdmFyIHB4ID0gX2EueCwgcHkgPSBfYS55O1xuICAgICAgICAgICAgdmFyIHZ4ID0gX2IueCwgdnkgPSBfYi55O1xuICAgICAgICAgICAgaWYgKHZ4IHx8IHZ5KSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1BsYXllclBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBweCArIHZ4LFxuICAgICAgICAgICAgICAgICAgICB5OiBweSArIHZ5XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAobmV3UGxheWVyUG9zaXRpb24ueCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UGxheWVyUG9zaXRpb24ueCA9IF90aGlzLmdyaWRTaXplIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5ld1BsYXllclBvc2l0aW9uLnggPiBfdGhpcy5ncmlkU2l6ZSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UGxheWVyUG9zaXRpb24ueCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXdQbGF5ZXJQb3NpdGlvbi55IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQbGF5ZXJQb3NpdGlvbi55ID0gX3RoaXMuZ3JpZFNpemUgLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmV3UGxheWVyUG9zaXRpb24ueSA+IF90aGlzLmdyaWRTaXplIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQbGF5ZXJQb3NpdGlvbi55ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMucGxheWVyUG9zaXRpb24gPSBuZXdQbGF5ZXJQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBfdGhpcy50cmFpbCA9IF90aGlzLnRyYWlsLmNvbmNhdChuZXdQbGF5ZXJQb3NpdGlvbikuc2xpY2UoLV90aGlzLnRhaWxTaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0VmVsb2NpdHkgPSAoMCwgbW9ieF8xLmFjdGlvbikoZnVuY3Rpb24gKG5ld1ZlbG9jaXR5KSB7XG4gICAgICAgICAgICBfdGhpcy52ZWxvY2l0eSA9IG5ld1ZlbG9jaXR5O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRUYWlsU2l6ZSA9ICgwLCBtb2J4XzEuYWN0aW9uKShmdW5jdGlvbiAodGFpbFNpemUpIHtcbiAgICAgICAgICAgIF90aGlzLnRhaWxTaXplID0gdGFpbFNpemU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldEZQUyA9ICgwLCBtb2J4XzEuYWN0aW9uKShmdW5jdGlvbiAoZnBzKSB7XG4gICAgICAgICAgICBfdGhpcy5mcHMgPSBmcHM7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFBsYXllclBvc2l0aW9uID0gKDAsIG1vYnhfMS5hY3Rpb24pKGZ1bmN0aW9uIChuZXdQbGF5ZXJQb3NpdGlvbikge1xuICAgICAgICAgICAgX3RoaXMucGxheWVyUG9zaXRpb24gPSBuZXdQbGF5ZXJQb3NpdGlvbjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2V0UmFuZG9tUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgeDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX3RoaXMuZ3JpZFNpemUpLFxuICAgICAgICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX3RoaXMuZ3JpZFNpemUpXG4gICAgICAgIH0pOyB9O1xuICAgICAgICAoMCwgbW9ieF8xLm1ha2VPYnNlcnZhYmxlKSh0aGlzLCB7XG4gICAgICAgICAgICBwbGF5ZXJQb3NpdGlvbjogbW9ieF8xLm9ic2VydmFibGUsXG4gICAgICAgICAgICB0cmFpbDogbW9ieF8xLm9ic2VydmFibGUsXG4gICAgICAgICAgICB0YWlsU2l6ZTogbW9ieF8xLm9ic2VydmFibGUsXG4gICAgICAgICAgICBmcmFtZUludGVydmFsOiBtb2J4XzEuY29tcHV0ZWQsXG4gICAgICAgICAgICBzY29yZTogbW9ieF8xLmNvbXB1dGVkLFxuICAgICAgICAgICAgcnVubmluZzogbW9ieF8xLm9ic2VydmFibGVcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHNldHVwIGxhenkgb2JzZXJ2YWJsZXNcbiAgICAgICAgKDAsIG1vYnhfMS5vbkJlY29tZU9ic2VydmVkKSh0aGlzLCAncGxheWVyUG9zaXRpb24nLCB0aGlzLnN0YXJ0R2FtZSk7XG4gICAgICAgICgwLCBtb2J4XzEub25CZWNvbWVVbm9ic2VydmVkKSh0aGlzLCAncGxheWVyUG9zaXRpb24nLCB0aGlzLnN1c3BlbmRHYW1lKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVTdG9yZS5wcm90b3R5cGUsIFwiZnJhbWVJbnRlcnZhbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIDEwMDAgLyB0aGlzLmZwcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lU3RvcmUucHJvdG90eXBlLCBcInNjb3JlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWlsU2l6ZSAtIGdhbWVDb25zdGFudHNfMS5DT05TVEFOVFMuc3RhcnRUYWlsU2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBHYW1lU3RvcmU7XG59KCkpO1xuZXhwb3J0cy5HYW1lU3RvcmUgPSBHYW1lU3RvcmU7XG4vLyBhbGwgcmVmZXJlbmNlcyBzaG91bGQgcG9pbnQgdG8gdGhpcyBzaW5nbGV0b24uXG4vLyBJZiBzdG9yZSBpcyBhY2Nlc3NlZCBvdXRzaWRlIG9mIHVzZUNvbnRleHQgKGUuZy4gb3V0c2lkZSBvZiBSZWFjdCkgeW91IG5lZWQgdG8gdXNlIHRoaXMgaW5zdGFuY2UgKHVubGVzcyB5b3Ugd2FudCBtdWx0aXBsZSBzdG9yZXMpIVxuZXhwb3J0cy5HYW1lU3RvcmVJbnN0YW5jZSA9IG5ldyBHYW1lU3RvcmUoKTtcbmV4cG9ydHMuR2FtZVN0b3JlQ29udGV4dCA9ICgwLCByZWFjdF8xLmNyZWF0ZUNvbnRleHQpKGV4cG9ydHMuR2FtZVN0b3JlSW5zdGFuY2UpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///896\n")},648:function(__unused_webpack_module,exports,__webpack_require__){"use strict";eval('\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\n__exportStar(__webpack_require__(460), exports);\n__exportStar(__webpack_require__(896), exports);\n__exportStar(__webpack_require__(626), exports);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjQ4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQG1pY3JvLXNuYWtlL3BsdWdpbi13aWxkY2FyZC8uLi9zdG9yZS9zcmMvaW5kZXgudHM/MzBkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2dhbWVDb25zdGFudHNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2dhbWVTdG9yZVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbGF6eVBsdWdpblByb3ZpZGVyXCIpLCBleHBvcnRzKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///648\n')},626:function(__unused_webpack_module,exports,__webpack_require__){"use strict";eval('\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === "function")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { "default": mod };\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.LazyPluginProvider = void 0;\nvar react_1 = __importDefault(__webpack_require__(691));\nvar LazyPluginProvider = function (_a) {\n    var Plugin = _a.Plugin, asyncLoad = _a.asyncLoad, rest = __rest(_a, ["Plugin", "asyncLoad"]);\n    var _b = react_1.default.useState(null), gameStore = _b[0], setGameStore = _b[1];\n    react_1.default.useEffect(function () {\n        asyncLoad().then(function (module) { return setGameStore(module.GameStoreInstance); });\n    }, []);\n    return gameStore ? react_1.default.createElement(Plugin, __assign({ gameStore: gameStore }, rest)) : null;\n};\nexports.LazyPluginProvider = LazyPluginProvider;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjI2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQG1pY3JvLXNuYWtlL3BsdWdpbi13aWxkY2FyZC8uLi9zdG9yZS9zcmMvbGF6eVBsdWdpblByb3ZpZGVyLnRzeD80ZGM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTGF6eVBsdWdpblByb3ZpZGVyID0gdm9pZCAwO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBMYXp5UGx1Z2luUHJvdmlkZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgUGx1Z2luID0gX2EuUGx1Z2luLCBhc3luY0xvYWQgPSBfYS5hc3luY0xvYWQsIHJlc3QgPSBfX3Jlc3QoX2EsIFtcIlBsdWdpblwiLCBcImFzeW5jTG9hZFwiXSk7XG4gICAgdmFyIF9iID0gcmVhY3RfMS5kZWZhdWx0LnVzZVN0YXRlKG51bGwpLCBnYW1lU3RvcmUgPSBfYlswXSwgc2V0R2FtZVN0b3JlID0gX2JbMV07XG4gICAgcmVhY3RfMS5kZWZhdWx0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFzeW5jTG9hZCgpLnRoZW4oZnVuY3Rpb24gKG1vZHVsZSkgeyByZXR1cm4gc2V0R2FtZVN0b3JlKG1vZHVsZS5HYW1lU3RvcmVJbnN0YW5jZSk7IH0pO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gZ2FtZVN0b3JlID8gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUGx1Z2luLCBfX2Fzc2lnbih7IGdhbWVTdG9yZTogZ2FtZVN0b3JlIH0sIHJlc3QpKSA6IG51bGw7XG59O1xuZXhwb3J0cy5MYXp5UGx1Z2luUHJvdmlkZXIgPSBMYXp5UGx1Z2luUHJvdmlkZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///626\n')},705:function(__unused_webpack_module,exports,__webpack_require__){"use strict";eval('\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { "default": mod };\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nvar engine_1 = __webpack_require__(654);\nvar mobx_react_1 = __webpack_require__(713);\nvar react_1 = __importDefault(__webpack_require__(691));\nvar react_konva_1 = __webpack_require__(903);\nvar REDUCTION_AMOUNT = 2;\nvar REDUCTION_LENGTH = 5000;\nvar Teleport = (0, mobx_react_1.observer)(function (_a) {\n    var gameStore = _a.gameStore;\n    var playerPosition = gameStore.playerPosition, setFPS = gameStore.setFPS, getRandomPosition = gameStore.getRandomPosition, setPlayerPosition = gameStore.setPlayerPosition;\n    var _b = react_1.default.useState(getRandomPosition()), teleportPosition = _b[0], setPlumPosition = _b[1];\n    react_1.default.useEffect(function () {\n        if (teleportPosition.x === playerPosition.x &&\n            teleportPosition.y === playerPosition.y) {\n            // move the teleport\n            setPlumPosition(getRandomPosition);\n            // teleport the player\n            setPlayerPosition(getRandomPosition());\n            // temporarily decrease speed for better survival odds\n            setFPS(gameStore.fps - REDUCTION_AMOUNT);\n            // eventually remove the speed buff\n            setTimeout(function () { return setFPS(gameStore.fps + REDUCTION_AMOUNT); }, REDUCTION_LENGTH);\n        }\n    }, [teleportPosition, playerPosition]);\n    var starSize = engine_1.CONSTANTS.tileSize / 2;\n    return (react_1.default.createElement(react_konva_1.Layer, null, react_1.default.createElement(react_konva_1.Star, { innerRadius: starSize, numPoints: 5, outerRadius: starSize, offset: { x: -starSize, y: -starSize }, stroke: \'orange\', width: starSize, height: starSize, x: teleportPosition.x * engine_1.CONSTANTS.gridSize, y: teleportPosition.y * engine_1.CONSTANTS.gridSize })));\n});\nexports.default = Teleport;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQG1pY3JvLXNuYWtlL3BsdWdpbi13aWxkY2FyZC8uL2FwcC50c3g/ZTIyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBlbmdpbmVfMSA9IHJlcXVpcmUoXCJAbWljcm8tc25ha2UvZW5naW5lXCIpO1xudmFyIG1vYnhfcmVhY3RfMSA9IHJlcXVpcmUoXCJtb2J4LXJlYWN0XCIpO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF9rb252YV8xID0gcmVxdWlyZShcInJlYWN0LWtvbnZhXCIpO1xudmFyIFJFRFVDVElPTl9BTU9VTlQgPSAyO1xudmFyIFJFRFVDVElPTl9MRU5HVEggPSA1MDAwO1xudmFyIFRlbGVwb3J0ID0gKDAsIG1vYnhfcmVhY3RfMS5vYnNlcnZlcikoZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGdhbWVTdG9yZSA9IF9hLmdhbWVTdG9yZTtcbiAgICB2YXIgcGxheWVyUG9zaXRpb24gPSBnYW1lU3RvcmUucGxheWVyUG9zaXRpb24sIHNldEZQUyA9IGdhbWVTdG9yZS5zZXRGUFMsIGdldFJhbmRvbVBvc2l0aW9uID0gZ2FtZVN0b3JlLmdldFJhbmRvbVBvc2l0aW9uLCBzZXRQbGF5ZXJQb3NpdGlvbiA9IGdhbWVTdG9yZS5zZXRQbGF5ZXJQb3NpdGlvbjtcbiAgICB2YXIgX2IgPSByZWFjdF8xLmRlZmF1bHQudXNlU3RhdGUoZ2V0UmFuZG9tUG9zaXRpb24oKSksIHRlbGVwb3J0UG9zaXRpb24gPSBfYlswXSwgc2V0UGx1bVBvc2l0aW9uID0gX2JbMV07XG4gICAgcmVhY3RfMS5kZWZhdWx0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0ZWxlcG9ydFBvc2l0aW9uLnggPT09IHBsYXllclBvc2l0aW9uLnggJiZcbiAgICAgICAgICAgIHRlbGVwb3J0UG9zaXRpb24ueSA9PT0gcGxheWVyUG9zaXRpb24ueSkge1xuICAgICAgICAgICAgLy8gbW92ZSB0aGUgdGVsZXBvcnRcbiAgICAgICAgICAgIHNldFBsdW1Qb3NpdGlvbihnZXRSYW5kb21Qb3NpdGlvbik7XG4gICAgICAgICAgICAvLyB0ZWxlcG9ydCB0aGUgcGxheWVyXG4gICAgICAgICAgICBzZXRQbGF5ZXJQb3NpdGlvbihnZXRSYW5kb21Qb3NpdGlvbigpKTtcbiAgICAgICAgICAgIC8vIHRlbXBvcmFyaWx5IGRlY3JlYXNlIHNwZWVkIGZvciBiZXR0ZXIgc3Vydml2YWwgb2Rkc1xuICAgICAgICAgICAgc2V0RlBTKGdhbWVTdG9yZS5mcHMgLSBSRURVQ1RJT05fQU1PVU5UKTtcbiAgICAgICAgICAgIC8vIGV2ZW50dWFsbHkgcmVtb3ZlIHRoZSBzcGVlZCBidWZmXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldEZQUyhnYW1lU3RvcmUuZnBzICsgUkVEVUNUSU9OX0FNT1VOVCk7IH0sIFJFRFVDVElPTl9MRU5HVEgpO1xuICAgICAgICB9XG4gICAgfSwgW3RlbGVwb3J0UG9zaXRpb24sIHBsYXllclBvc2l0aW9uXSk7XG4gICAgdmFyIHN0YXJTaXplID0gZW5naW5lXzEuQ09OU1RBTlRTLnRpbGVTaXplIC8gMjtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X2tvbnZhXzEuTGF5ZXIsIG51bGwsIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X2tvbnZhXzEuU3RhciwgeyBpbm5lclJhZGl1czogc3RhclNpemUsIG51bVBvaW50czogNSwgb3V0ZXJSYWRpdXM6IHN0YXJTaXplLCBvZmZzZXQ6IHsgeDogLXN0YXJTaXplLCB5OiAtc3RhclNpemUgfSwgc3Ryb2tlOiAnb3JhbmdlJywgd2lkdGg6IHN0YXJTaXplLCBoZWlnaHQ6IHN0YXJTaXplLCB4OiB0ZWxlcG9ydFBvc2l0aW9uLnggKiBlbmdpbmVfMS5DT05TVEFOVFMuZ3JpZFNpemUsIHk6IHRlbGVwb3J0UG9zaXRpb24ueSAqIGVuZ2luZV8xLkNPTlNUQU5UUy5ncmlkU2l6ZSB9KSkpO1xufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBUZWxlcG9ydDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///705\n')}}]);