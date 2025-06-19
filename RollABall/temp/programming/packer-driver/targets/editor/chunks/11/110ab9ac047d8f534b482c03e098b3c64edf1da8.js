System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Input, input, KeyCode, Vec2, _dec, _class, _class2, _descriptor, _crd, ccclass, property, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Input = _cc.Input;
      input = _cc.input;
      KeyCode = _cc.KeyCode;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0147e7mH8dI2rhtcnQ4ciJa", "Player", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventKeyboard', 'Input', 'input', 'KeyCode', 'log', 'Node', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Player", Player = (_dec = ccclass('Player'), _dec(_class = (_class2 = class Player extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          this.moveDir = Vec2.ZERO;
        }

        start() {}

        onLoad() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_W:
              this.moveDir = new Vec2(this.moveDir.x, 1);
              break;

            case KeyCode.KEY_S:
              this.moveDir = new Vec2(this.moveDir.x, -1);
              break;

            case KeyCode.KEY_A:
              this.moveDir = new Vec2(-1, this.moveDir.y);
              break;

            case KeyCode.KEY_D:
              this.moveDir = new Vec2(1, this.moveDir.y);
              break;
          }

          console.log(this.moveDir);
        }

        onKeyUp(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_W:
              this.moveDir = new Vec2(this.moveDir.x, 0);
              break;

            case KeyCode.KEY_S:
              this.moveDir = new Vec2(this.moveDir.x, 0);
              break;

            case KeyCode.KEY_A:
              this.moveDir = new Vec2(0, this.moveDir.y);
              break;

            case KeyCode.KEY_D:
              this.moveDir = new Vec2(0, this.moveDir.y);
              break;
          }

          console.log(this.moveDir);
        }

        onKeyPressing(event) {
          console.log(event.keyCode);
        }

        update(deltaTime) {
          const pos = this.node.position; // console.log(this.moveDir)

          if (!this.moveDir) return;
          this.node.setPosition(pos.x + this.moveDir.y * this.speed * deltaTime, pos.y, pos.z + this.moveDir.x * this.speed * deltaTime);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=110ab9ac047d8f534b482c03e098b3c64edf1da8.js.map