System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, BgBox;

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
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7674qVtCVOhLFLVpEA85TL", "BgBox", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BgBox", BgBox = (_dec = ccclass('BgBox'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class BgBox extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bg1", _descriptor, this);

          _initializerDefineProperty(this, "bg2", _descriptor2, this);

          _initializerDefineProperty(this, "speed", _descriptor3, this);
        }

        start() {}

        update(deltaTime) {
          this.bg1.setPosition(this.bg1.position.x, this.bg1.position.y - this.speed * deltaTime, this.bg1.position.z);
          this.bg2.setPosition(this.bg2.position.x, this.bg2.position.y - this.speed * deltaTime, this.bg2.position.z);

          if (this.bg1.position.y < -852) {
            this.bg1.setPosition(this.bg1.position.x, this.bg2.position.y + 852, this.bg1.position.z);
          }

          if (this.bg2.position.y < -852) {
            this.bg2.setPosition(this.bg2.position.x, this.bg1.position.y + 852, this.bg2.position.z);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=69696d97d660478b251fb8d990d1d20cfa85859e.js.map