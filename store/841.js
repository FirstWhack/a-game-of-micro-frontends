(self.webpackChunk_micro_snake_engine=self.webpackChunk_micro_snake_engine||[]).push([[841],{825:(__unused_webpack_module,exports)=>{"use strict";eval('\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.velocityByKeyCode = exports.CONSTANTS = void 0;\nexports.CONSTANTS = {\n    gridSize: 20,\n    tileSizeMultiplier: 0.9,\n    get tileSize() {\n        return this.gridSize * this.tileSizeMultiplier;\n    },\n    get canvasSize() {\n        return this.gridSize * this.gridSize;\n    },\n    get startPosition() {\n        return { x: this.gridSize / 2, y: this.gridSize / 2 };\n    },\n    startFps: 6,\n    startTailSize: 5\n};\nexports.velocityByKeyCode = {\n    // these should really account for the tileSize\n    37: { x: -1, y: 0 },\n    38: { x: 0, y: -1 },\n    39: { x: 1, y: 0 },\n    40: { x: 0, y: 1 }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODI1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQG1pY3JvLXNuYWtlL2VuZ2luZS8uL3NyYy9nYW1lQ29uc3RhbnRzLnRzPzQ4ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnZlbG9jaXR5QnlLZXlDb2RlID0gZXhwb3J0cy5DT05TVEFOVFMgPSB2b2lkIDA7XG5leHBvcnRzLkNPTlNUQU5UUyA9IHtcbiAgICBncmlkU2l6ZTogMjAsXG4gICAgdGlsZVNpemVNdWx0aXBsaWVyOiAwLjksXG4gICAgZ2V0IHRpbGVTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkU2l6ZSAqIHRoaXMudGlsZVNpemVNdWx0aXBsaWVyO1xuICAgIH0sXG4gICAgZ2V0IGNhbnZhc1NpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRTaXplICogdGhpcy5ncmlkU2l6ZTtcbiAgICB9LFxuICAgIGdldCBzdGFydFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLmdyaWRTaXplIC8gMiwgeTogdGhpcy5ncmlkU2l6ZSAvIDIgfTtcbiAgICB9LFxuICAgIHN0YXJ0RnBzOiA2LFxuICAgIHN0YXJ0VGFpbFNpemU6IDVcbn07XG5leHBvcnRzLnZlbG9jaXR5QnlLZXlDb2RlID0ge1xuICAgIC8vIHRoZXNlIHNob3VsZCByZWFsbHkgYWNjb3VudCBmb3IgdGhlIHRpbGVTaXplXG4gICAgMzc6IHsgeDogLTEsIHk6IDAgfSxcbiAgICAzODogeyB4OiAwLCB5OiAtMSB9LFxuICAgIDM5OiB7IHg6IDEsIHk6IDAgfSxcbiAgICA0MDogeyB4OiAwLCB5OiAxIH1cbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///825\n')},841:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GameStoreContext = exports.GameStoreInstance = exports.GameStore = void 0;\nvar mobx_1 = __webpack_require__(284);\nvar react_1 = __webpack_require__(691);\nvar gameConstants_1 = __webpack_require__(825);\n// without configuring enforceActions it would be possible to modify any observable from anywhere\n(0, mobx_1.configure)({ enforceActions: 'observed' });\n// base class\nvar GameStore = /** @class */ (function () {\n    function GameStore() {\n        var _this = this;\n        this.gridSize = gameConstants_1.CONSTANTS.gridSize;\n        // initial game state, player is centered with no velocity\n        this.playerPosition = gameConstants_1.CONSTANTS.startPosition;\n        this.velocity = {\n            x: 0,\n            y: 0\n        };\n        this.trail = [gameConstants_1.CONSTANTS.startPosition];\n        this.tailSize = gameConstants_1.CONSTANTS.startTailSize;\n        // housekeeping to control animation\n        this.running = false;\n        // use to control fps and therefore game speed\n        this.lastFrameTime = Date.now();\n        this.fps = gameConstants_1.CONSTANTS.startFps;\n        this.suspendGame = (0, mobx_1.action)(function () {\n            _this.running = false;\n        });\n        this.startGame = function () {\n            _this.running = true;\n            _this.tick();\n        };\n        this.tick = function () {\n            // render loop control\n            if (_this.running) {\n                requestAnimationFrame(function () { return _this.tick(); });\n                var now = Date.now();\n                var elapsed = now - _this.lastFrameTime;\n                // render speed control\n                if (elapsed > _this.frameInterval) {\n                    _this.lastFrameTime = now - (elapsed % _this.frameInterval);\n                    _this.updatePlayerPosition(_this.playerPosition, _this.velocity);\n                }\n            }\n        };\n        this.updatePlayerPosition = (0, mobx_1.action)(function (_a, _b) {\n            var px = _a.x, py = _a.y;\n            var vx = _b.x, vy = _b.y;\n            if (vx || vy) {\n                var newPlayerPosition = {\n                    x: px + vx,\n                    y: py + vy\n                };\n                if (newPlayerPosition.x < 0) {\n                    newPlayerPosition.x = _this.gridSize - 1;\n                }\n                if (newPlayerPosition.x > _this.gridSize - 1) {\n                    newPlayerPosition.x = 0;\n                }\n                if (newPlayerPosition.y < 0) {\n                    newPlayerPosition.y = _this.gridSize - 1;\n                }\n                if (newPlayerPosition.y > _this.gridSize - 1) {\n                    newPlayerPosition.y = 0;\n                }\n                _this.playerPosition = newPlayerPosition;\n                _this.trail = _this.trail.concat(newPlayerPosition).slice(-_this.tailSize);\n            }\n        });\n        this.setVelocity = (0, mobx_1.action)(function (newVelocity) {\n            _this.velocity = newVelocity;\n        });\n        this.setTailSize = (0, mobx_1.action)(function (tailSize) {\n            _this.tailSize = tailSize;\n        });\n        this.setFPS = (0, mobx_1.action)(function (fps) {\n            _this.fps = fps;\n        });\n        this.setPlayerPosition = (0, mobx_1.action)(function (newPlayerPosition) {\n            _this.playerPosition = newPlayerPosition;\n        });\n        this.getRandomPosition = function () { return ({\n            x: Math.floor(Math.random() * _this.gridSize),\n            y: Math.floor(Math.random() * _this.gridSize)\n        }); };\n        (0, mobx_1.makeObservable)(this, {\n            playerPosition: mobx_1.observable,\n            trail: mobx_1.observable,\n            tailSize: mobx_1.observable,\n            frameInterval: mobx_1.computed,\n            score: mobx_1.computed,\n            running: mobx_1.observable\n        });\n        // setup lazy observables\n        (0, mobx_1.onBecomeObserved)(this, 'playerPosition', this.startGame);\n        (0, mobx_1.onBecomeUnobserved)(this, 'playerPosition', this.suspendGame);\n    }\n    Object.defineProperty(GameStore.prototype, \"frameInterval\", {\n        get: function () {\n            return 1000 / this.fps;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(GameStore.prototype, \"score\", {\n        get: function () {\n            return this.tailSize - gameConstants_1.CONSTANTS.startTailSize;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return GameStore;\n}());\nexports.GameStore = GameStore;\n// all references should point to this singleton.\n// If store is accessed outside of useContext (e.g. outside of React) you need to use this instance (unless you want multiple stores)!\nexports.GameStoreInstance = new GameStore();\nexports.GameStoreContext = (0, react_1.createContext)(exports.GameStoreInstance);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODQxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQG1pY3JvLXNuYWtlL2VuZ2luZS8uL3NyYy9nYW1lU3RvcmUudHM/NDg0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZVN0b3JlQ29udGV4dCA9IGV4cG9ydHMuR2FtZVN0b3JlSW5zdGFuY2UgPSBleHBvcnRzLkdhbWVTdG9yZSA9IHZvaWQgMDtcbnZhciBtb2J4XzEgPSByZXF1aXJlKFwibW9ieFwiKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIGdhbWVDb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2dhbWVDb25zdGFudHNcIik7XG4vLyB3aXRob3V0IGNvbmZpZ3VyaW5nIGVuZm9yY2VBY3Rpb25zIGl0IHdvdWxkIGJlIHBvc3NpYmxlIHRvIG1vZGlmeSBhbnkgb2JzZXJ2YWJsZSBmcm9tIGFueXdoZXJlXG4oMCwgbW9ieF8xLmNvbmZpZ3VyZSkoeyBlbmZvcmNlQWN0aW9uczogJ29ic2VydmVkJyB9KTtcbi8vIGJhc2UgY2xhc3NcbnZhciBHYW1lU3RvcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2FtZVN0b3JlKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmdyaWRTaXplID0gZ2FtZUNvbnN0YW50c18xLkNPTlNUQU5UUy5ncmlkU2l6ZTtcbiAgICAgICAgLy8gaW5pdGlhbCBnYW1lIHN0YXRlLCBwbGF5ZXIgaXMgY2VudGVyZWQgd2l0aCBubyB2ZWxvY2l0eVxuICAgICAgICB0aGlzLnBsYXllclBvc2l0aW9uID0gZ2FtZUNvbnN0YW50c18xLkNPTlNUQU5UUy5zdGFydFBvc2l0aW9uO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50cmFpbCA9IFtnYW1lQ29uc3RhbnRzXzEuQ09OU1RBTlRTLnN0YXJ0UG9zaXRpb25dO1xuICAgICAgICB0aGlzLnRhaWxTaXplID0gZ2FtZUNvbnN0YW50c18xLkNPTlNUQU5UUy5zdGFydFRhaWxTaXplO1xuICAgICAgICAvLyBob3VzZWtlZXBpbmcgdG8gY29udHJvbCBhbmltYXRpb25cbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIC8vIHVzZSB0byBjb250cm9sIGZwcyBhbmQgdGhlcmVmb3JlIGdhbWUgc3BlZWRcbiAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5mcHMgPSBnYW1lQ29uc3RhbnRzXzEuQ09OU1RBTlRTLnN0YXJ0RnBzO1xuICAgICAgICB0aGlzLnN1c3BlbmRHYW1lID0gKDAsIG1vYnhfMS5hY3Rpb24pKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy50aWNrKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHJlbmRlciBsb29wIGNvbnRyb2xcbiAgICAgICAgICAgIGlmIChfdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnRpY2soKTsgfSk7XG4gICAgICAgICAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSBub3cgLSBfdGhpcy5sYXN0RnJhbWVUaW1lO1xuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBzcGVlZCBjb250cm9sXG4gICAgICAgICAgICAgICAgaWYgKGVsYXBzZWQgPiBfdGhpcy5mcmFtZUludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxhc3RGcmFtZVRpbWUgPSBub3cgLSAoZWxhcHNlZCAlIF90aGlzLmZyYW1lSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVQbGF5ZXJQb3NpdGlvbihfdGhpcy5wbGF5ZXJQb3NpdGlvbiwgX3RoaXMudmVsb2NpdHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJQb3NpdGlvbiA9ICgwLCBtb2J4XzEuYWN0aW9uKShmdW5jdGlvbiAoX2EsIF9iKSB7XG4gICAgICAgICAgICB2YXIgcHggPSBfYS54LCBweSA9IF9hLnk7XG4gICAgICAgICAgICB2YXIgdnggPSBfYi54LCB2eSA9IF9iLnk7XG4gICAgICAgICAgICBpZiAodnggfHwgdnkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3UGxheWVyUG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHB4ICsgdngsXG4gICAgICAgICAgICAgICAgICAgIHk6IHB5ICsgdnlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChuZXdQbGF5ZXJQb3NpdGlvbi54IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQbGF5ZXJQb3NpdGlvbi54ID0gX3RoaXMuZ3JpZFNpemUgLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmV3UGxheWVyUG9zaXRpb24ueCA+IF90aGlzLmdyaWRTaXplIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQbGF5ZXJQb3NpdGlvbi54ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5ld1BsYXllclBvc2l0aW9uLnkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1BsYXllclBvc2l0aW9uLnkgPSBfdGhpcy5ncmlkU2l6ZSAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXdQbGF5ZXJQb3NpdGlvbi55ID4gX3RoaXMuZ3JpZFNpemUgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1BsYXllclBvc2l0aW9uLnkgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5wbGF5ZXJQb3NpdGlvbiA9IG5ld1BsYXllclBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIF90aGlzLnRyYWlsID0gX3RoaXMudHJhaWwuY29uY2F0KG5ld1BsYXllclBvc2l0aW9uKS5zbGljZSgtX3RoaXMudGFpbFNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRWZWxvY2l0eSA9ICgwLCBtb2J4XzEuYWN0aW9uKShmdW5jdGlvbiAobmV3VmVsb2NpdHkpIHtcbiAgICAgICAgICAgIF90aGlzLnZlbG9jaXR5ID0gbmV3VmVsb2NpdHk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFRhaWxTaXplID0gKDAsIG1vYnhfMS5hY3Rpb24pKGZ1bmN0aW9uICh0YWlsU2l6ZSkge1xuICAgICAgICAgICAgX3RoaXMudGFpbFNpemUgPSB0YWlsU2l6ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0RlBTID0gKDAsIG1vYnhfMS5hY3Rpb24pKGZ1bmN0aW9uIChmcHMpIHtcbiAgICAgICAgICAgIF90aGlzLmZwcyA9IGZwcztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0UGxheWVyUG9zaXRpb24gPSAoMCwgbW9ieF8xLmFjdGlvbikoZnVuY3Rpb24gKG5ld1BsYXllclBvc2l0aW9uKSB7XG4gICAgICAgICAgICBfdGhpcy5wbGF5ZXJQb3NpdGlvbiA9IG5ld1BsYXllclBvc2l0aW9uO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZXRSYW5kb21Qb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gICAgICAgICAgICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfdGhpcy5ncmlkU2l6ZSksXG4gICAgICAgICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfdGhpcy5ncmlkU2l6ZSlcbiAgICAgICAgfSk7IH07XG4gICAgICAgICgwLCBtb2J4XzEubWFrZU9ic2VydmFibGUpKHRoaXMsIHtcbiAgICAgICAgICAgIHBsYXllclBvc2l0aW9uOiBtb2J4XzEub2JzZXJ2YWJsZSxcbiAgICAgICAgICAgIHRyYWlsOiBtb2J4XzEub2JzZXJ2YWJsZSxcbiAgICAgICAgICAgIHRhaWxTaXplOiBtb2J4XzEub2JzZXJ2YWJsZSxcbiAgICAgICAgICAgIGZyYW1lSW50ZXJ2YWw6IG1vYnhfMS5jb21wdXRlZCxcbiAgICAgICAgICAgIHNjb3JlOiBtb2J4XzEuY29tcHV0ZWQsXG4gICAgICAgICAgICBydW5uaW5nOiBtb2J4XzEub2JzZXJ2YWJsZVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gc2V0dXAgbGF6eSBvYnNlcnZhYmxlc1xuICAgICAgICAoMCwgbW9ieF8xLm9uQmVjb21lT2JzZXJ2ZWQpKHRoaXMsICdwbGF5ZXJQb3NpdGlvbicsIHRoaXMuc3RhcnRHYW1lKTtcbiAgICAgICAgKDAsIG1vYnhfMS5vbkJlY29tZVVub2JzZXJ2ZWQpKHRoaXMsICdwbGF5ZXJQb3NpdGlvbicsIHRoaXMuc3VzcGVuZEdhbWUpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZVN0b3JlLnByb3RvdHlwZSwgXCJmcmFtZUludGVydmFsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gMTAwMCAvIHRoaXMuZnBzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVTdG9yZS5wcm90b3R5cGUsIFwic2NvcmVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhaWxTaXplIC0gZ2FtZUNvbnN0YW50c18xLkNPTlNUQU5UUy5zdGFydFRhaWxTaXplO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEdhbWVTdG9yZTtcbn0oKSk7XG5leHBvcnRzLkdhbWVTdG9yZSA9IEdhbWVTdG9yZTtcbi8vIGFsbCByZWZlcmVuY2VzIHNob3VsZCBwb2ludCB0byB0aGlzIHNpbmdsZXRvbi5cbi8vIElmIHN0b3JlIGlzIGFjY2Vzc2VkIG91dHNpZGUgb2YgdXNlQ29udGV4dCAoZS5nLiBvdXRzaWRlIG9mIFJlYWN0KSB5b3UgbmVlZCB0byB1c2UgdGhpcyBpbnN0YW5jZSAodW5sZXNzIHlvdSB3YW50IG11bHRpcGxlIHN0b3JlcykhXG5leHBvcnRzLkdhbWVTdG9yZUluc3RhbmNlID0gbmV3IEdhbWVTdG9yZSgpO1xuZXhwb3J0cy5HYW1lU3RvcmVDb250ZXh0ID0gKDAsIHJlYWN0XzEuY3JlYXRlQ29udGV4dCkoZXhwb3J0cy5HYW1lU3RvcmVJbnN0YW5jZSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///841\n")}}]);