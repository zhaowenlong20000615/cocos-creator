System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Enum, input, Input, instantiate, Node, Prefab, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, BulletType, Player;

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
      Enum = _cc.Enum;
      input = _cc.input;
      Input = _cc.Input;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9f566ZpmqJO4L25NRV4laed", "Player", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Enum', 'EventTouch', 'input', 'Input', 'instantiate', 'Node', 'Prefab', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      BulletType = /*#__PURE__*/function (BulletType) {
        BulletType[BulletType["NoneBullet"] = 0] = "NoneBullet";
        BulletType[BulletType["OneBullet"] = 1] = "OneBullet";
        BulletType[BulletType["TwoBullet"] = 2] = "TwoBullet";
        return BulletType;
      }(BulletType || {});

      Enum(BulletType);

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property({
        type: Enum(BulletType)
      }), _dec(_class = (_class2 = class Player extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bulletParent", _descriptor, this);

          _initializerDefineProperty(this, "bullet1Prefab", _descriptor2, this);

          _initializerDefineProperty(this, "bullet2Prefab", _descriptor3, this);

          _initializerDefineProperty(this, "bulletType", _descriptor4, this);
        }

        start() {
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.createBullet();
        }

        update(deltaTime) {}

        onTouchMove(event) {
          const delta = event.getDelta();
          this.node.setPosition(this.node.position.x + delta.x, this.node.position.y + delta.y, this.node.position.z);
        }

        createBullet() {
          switch (this.bulletType) {
            case BulletType.OneBullet:
              this.createOneBullet();
              break;

            case BulletType.TwoBullet:
              this.createTwoBullet();
              break;

            default:
              break;
          }
        }

        async createOneBullet() {
          const bullet = instantiate(this.bullet1Prefab);
          const bulletComponent = bullet.getComponent('Bullet');
          bullet.setParent(this.bulletParent);
          bullet.setPosition(this.node.position.x, this.node.position.y + 80, this.node.position.z);
          await new Promise(resolve => setTimeout(resolve, bulletComponent.createTime * 1000));
          this.createBullet();
        }

        async createTwoBullet() {
          const bullet1 = instantiate(this.bullet2Prefab);
          const bullet2 = instantiate(this.bullet2Prefab);
          const bullet1Component = bullet1.getComponent('Bullet');
          bullet1.setParent(this.bulletParent);
          bullet2.setParent(this.bulletParent);
          bullet1.setPosition(this.node.position.x - 41, this.node.position.y + 35, this.node.position.z);
          bullet2.setPosition(this.node.position.x + 25, this.node.position.y + 35, this.node.position.z);
          await new Promise(resolve => setTimeout(resolve, bullet1Component.createTime * 1000));
          this.createBullet();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bulletParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bullet1Prefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bullet2Prefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bulletType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return BulletType.OneBullet;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=20112dc415567f5c86e469832b866b79db5e5166.js.map