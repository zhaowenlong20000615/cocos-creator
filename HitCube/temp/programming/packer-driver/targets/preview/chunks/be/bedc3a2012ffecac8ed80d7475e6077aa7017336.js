System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, input, Input, instantiate, RigidBody, Vec3, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, AttackController;

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
      Prefab = _cc.Prefab;
      input = _cc.input;
      Input = _cc.Input;
      instantiate = _cc.instantiate;
      RigidBody = _cc.RigidBody;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7f23a36Y9HJZT7wFkYHj+y", "AttackController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'input', 'Input', 'EventTouch', 'instantiate', 'RigidBody', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AttackController", AttackController = (_dec = ccclass('AttackController'), _dec2 = property(Prefab), _dec(_class = (_class2 = class AttackController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bulletPrefab", _descriptor, this);

          _initializerDefineProperty(this, "fireRate", _descriptor2, this);

          _initializerDefineProperty(this, "bulletSpeed", _descriptor3, this);

          this.isTouching = false;
          this.fireTimer = 0;
        }

        start() {
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        }

        update(deltaTime) {
          if (!this.isTouching) return;
          this.fireTimer += deltaTime;
          if (this.fireTimer <= this.fireRate) return;
          this.fire();
          this.fireTimer = 0;
        }

        fire() {
          var bullte = instantiate(this.bulletPrefab);
          bullte.setParent(this.node);
          bullte.setWorldPosition(this.node.position);
          var rgd = bullte.getComponent(RigidBody);
          rgd.setLinearVelocity(new Vec3(0, 0, -this.bulletSpeed));
        }

        onTouchStart(event) {
          this.isTouching = true;
        }

        onTouchEnd(event) {
          this.isTouching = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fireRate", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bulletSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bedc3a2012ffecac8ed80d7475e6077aa7017336.js.map