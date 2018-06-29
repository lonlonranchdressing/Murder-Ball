"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//=============================================================================
// Mercedes.js
//=============================================================================

/*:
* @author Kino
* @plugindesc A plugin that adds Event Driven Functionality to RMMV
*
*
* @help
* Version 1.1.0
//=============================================================================
//  Script Calls
//=============================================================================
*
* Mercedes.addGlobalEmitter(name, emitter);
* Makes an emitter global to the RPGMakerMV process.
* This allows you to share the emitter with other developers across
* your RPGMakerMV game.
*
//=============================================================================
//  Classes
//=============================================================================
*  Mercedes.Emitter
*  Mercedes.Stream
*
//=============================================================================
//  Contact Information
//=============================================================================
*
* Contact me via twitter: EISKino, or on the rpg maker forums.
* Username on forums: Kino.
*
* Forum Link: http://forums.rpgmakerweb.com/index.php?/profile/75879-kino/
* Website Link: http://endlessillusoft.com/
* Twitter Link: https://twitter.com/EISKino
* Patreon Link: https://www.patreon.com/EISKino
*
* Hope this plugin helps, and enjoy!
* --Kino
*/
var Mercedes = {};
// const Mercedes = Mercedes || {};
Mercedes.imported = true;

(function ($) {

  function setup($) {
    //=============================================================================
    //  Constants
    //============================================================================= 
    var VERSION = "1.1.0";
    //=============================================================================
    //  MercedesEmitter
    //=============================================================================

    var MercedesEmitter = function () {
      function MercedesEmitter() {
        _classCallCheck(this, MercedesEmitter);

        this._events = {};
      }

      _createClass(MercedesEmitter, [{
        key: "once",
        value: function once(eventName, handler) {
          this.setupEventNameSpace(eventName);
          this.registerEventHandler(eventName, "once", handler);
          return this;
        }
      }, {
        key: "on",
        value: function on(eventName, handler) {
          this.setupEventNameSpace(eventName);
          this.registerEventHandler(eventName, "on", handler);
          return this;
        }
      }, {
        key: "emit",
        value: function emit(eventName) {
          var _this = this;

          var args = Array.prototype.slice.call(arguments);
          if (this._events[eventName] !== undefined) {
            this._events[eventName].forEach(function (listener, index) {
              if (/once/.test(listener.type)) {
                console.log("Once Handler Removed");
                _this._events[eventName].splice(index, 1);
              }
              _this.callHandler(listener.handler, args.slice(1));
            });
          }
        }
      }, {
        key: "setupEventNameSpace",
        value: function setupEventNameSpace(eventName) {
          if (this._events[eventName] === undefined) {
            this._events[eventName] = [];
          }
        }
      }, {
        key: "registerEventHandler",
        value: function registerEventHandler(eventName, type, handler) {
          this._events[eventName].push({ type: type, handler: handler });
        }
      }, {
        key: "callHandler",
        value: function callHandler(handler, args) {
          if (typeof handler == 'function') {
            handler.apply(this, args);
          } else {
            $gameTemp.reserveCommonEvent(handler);
            $gameMap._interpreter.setupChild($gameTemp.reservedCommonEvent().list);
          }
        }
      }]);

      return MercedesEmitter;
    }();
    //=============================================================================
    //  MercedesEventStream
    //=============================================================================


    var MercedesStream = function (_MercedesEmitter) {
      _inherits(MercedesStream, _MercedesEmitter);

      function MercedesStream(buffer) {
        _classCallCheck(this, MercedesStream);

        var _this2 = _possibleConstructorReturn(this, (MercedesStream.__proto__ || Object.getPrototypeOf(MercedesStream)).call(this));

        _this2._buffer = buffer || [];
        _this2._iterator = -1;
        _this2._tempBuffer = [];
        _this2._observables = [];
        _this2._done = false;
        _this2._paused = true;
        return _this2;
      }

      _createClass(MercedesStream, [{
        key: "on",
        value: function on(eventName, handler) {
          _get(MercedesStream.prototype.__proto__ || Object.getPrototypeOf(MercedesStream.prototype), "on", this).call(this, eventName, handler);
          this.resume();
        }
      }, {
        key: "startWith",
        value: function startWith() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          this.push(args);
        }
      }, {
        key: "push",
        value: function push() {
          var _this3 = this;

          for (var _len2 = arguments.length, dataArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            dataArgs[_key2] = arguments[_key2];
          }

          dataArgs.forEach(function (data) {
            _this3._buffer.push(data);
          });
        }
      }, {
        key: "resume",
        value: function resume() {
          this._paused = false;
          this.next();
        }
      }, {
        key: "pause",
        value: function pause() {
          this._paused = true;
        }
      }, {
        key: "next",
        value: function next() {
          if (this._iterator === this._buffer.length - 1) this._done = true;
          if (this._done !== true && this._paused !== true) {
            this._iterator++;
            this.emit("data", this.value());
            this.next();
          }
          return "done";
        }
      }, {
        key: "value",
        value: function value() {
          return this._buffer[this._iterator];
        }
      }, {
        key: "merge",
        value: function merge(stream) {
          this._tempBuffer = this._buffer.concat(stream._buffer);
          this._observables = this._observables.concat(stream._observables);
          //Maybe have it merge events also
          var clone = this.clone(this);
          this.createCloneBuffer(clone);
          return clone;
        }
      }, {
        key: "map",
        value: function map(f) {
          this._tempBuffer = this._buffer.map(f);
          var clone = this.clone(this);
          this.createCloneBuffer(clone);
          return clone;
        }
      }, {
        key: "filter",
        value: function filter(f) {
          this._tempBuffer = this._buffer.filter(f);
          var clone = this.clone(this);
          this.createCloneBuffer(clone);
          return clone;
        }
      }, {
        key: "take",
        value: function take(num) {
          this._tempBuffer = this._buffer.slice(0, num);
          var clone = this.clone(this);
          this.createCloneBuffer(clone);
          return clone;
        }
      }, {
        key: "createCloneBuffer",
        value: function createCloneBuffer(clone) {
          clone._buffer = $.$clone(this._tempBuffer.slice());
          this._tempBuffer.length = 0;
        }
      }, {
        key: "each",
        value: function each(f) {
          this._buffer.slice().forEach(f);
        }
      }, {
        key: "clone",
        value: function clone(obj) {
          var original = JSON.parse(JSON.stringify(obj));
          var copy = Object.assign(new MercedesStream(), original, this);
          copy.reset();
          return copy;
        }
      }, {
        key: "reduce",
        value: function reduce(start, f) {
          var val = this._buffer.slice(start).reduce(f, "");
          this.clear();
          return val;
        }
      }, {
        key: "read",
        value: function read() {
          return this._buffer;
        }
      }, {
        key: "clear",
        value: function clear() {
          this._buffer.length = 0;
        }
      }, {
        key: "reset",
        value: function reset() {
          this._done = false;
          this._iterator = -1;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          delete this;
        }
      }]);

      return MercedesStream;
    }(MercedesEmitter);

    //=============================================================================
    //  MercedesLog
    //=============================================================================


    var MercedesLog = function () {
      function MercedesLog() {
        _classCallCheck(this, MercedesLog);
      }

      _createClass(MercedesLog, null, [{
        key: "log",
        value: function log() {
          var border = "background:#ff68b0; padding:5px 0px;";
          console.group("%c %c-Mercedes Log- %c ", border, "background:#292e3a;color: #ff68b0; padding:5px 0px;", border);
          var args = Array.prototype.slice.call(arguments);
          console.log.apply(console, args);
        }
      }, {
        key: "group",
        value: function group() {
          var border = "background:#ff68b0; padding:5px 0px;";
          console.group("%c %c-Mercedes Group Log- %c ", border, "background:#292e3a;color: #ff68b0; padding:5px 0px;", border);
          var args = Array.prototype.slice.call(arguments);
          console.log.apply(console, args);
        }
      }, {
        key: "version",
        value: function version() {
          var border = "background:#ff68b0; padding:5px 0px;";
          console.group("%c %c-[Versions]- %c ", border, "background:#292e3a;color: #ff68b0; padding:5px 0px;", border);
          console.log("%c Mercedes Version => " + VERSION + " ", "background:#292e3a;color: #ff68b0");
          console.log("%c RMMV Version => " + Utils.RPGMAKER_VERSION + " ", "background:#292e3a;color: #ff68b0");
        }
      }]);

      return MercedesLog;
    }();
    //=============================================================================
    //  Exports
    //=============================================================================


    Object.assign($, {
      Emitter: MercedesEmitter,
      createStream: function createStream(array) {
        return new MercedesStream(array);
      },
      Console: MercedesLog,
      global: {},
      addGlobalEmitter: function addGlobalEmitter(name, emitter) {
        this.global[name] = emitter;
      },

      $clone: function $clone(obj) {
        return JSON.parse(JSON.stringify(obj));
      },
      $fclone: function $fclone(obj) {
        return this.$freeze(this.$clone(obj));
      },

      $pipe: function $pipe() {
        for (var _len3 = arguments.length, fns = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          fns[_key3] = arguments[_key3];
        }

        return function (initialVal) {
          return fns.reduce(function (value, fn) {
            return fn(value);
          }, initialVal);
        };
      },
      $compose: function $compose() {
        for (var _len4 = arguments.length, fns = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          fns[_key4] = arguments[_key4];
        }

        return function (initialVal) {
          return fns.reduceRight(function (acc, fn) {
            return fn(acc);
          }, initialVal);
        };
      },
      $pluck: function $pluck(key) {
        return function (object) {
          return object[key];
        };
      },
      $trace: function $trace(label, val) {
        console.log(label + " - " + val);return val;
      },
      $freeze: function $freeze(obj) {
        return Object.freeze(obj);
      },
      $curry: function $curry(f) {
        for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          args[_key5 - 1] = arguments[_key5];
        }

        return function () {
          for (var _len6 = arguments.length, args2 = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args2[_key6] = arguments[_key6];
          }

          return f.apply(null, args.concat(args2));
        };
      },
      $task: function $task(f) {
        return function () {
          return f;
        };
      },
      $create: function $create(constructor, api) {
        return function () {
          for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }

          var obj = Object.assign({}, api);
          Object.setPrototypeOf(obj, constructor.prototype);
          return constructor.apply(obj, args) || obj;
        };
      },
      $make: function $make(Fn, prototype) {
        Fn.prototype = Object.create(prototype);
        Fn.prototype.constructor = Fn;
        return Fn;
      },
      $expand: function $expand(Fn, api) {
        return Object.assign(Fn.prototype, api);
      }
    });
    Object.freeze($);
  }

  setup($);
})(Mercedes);