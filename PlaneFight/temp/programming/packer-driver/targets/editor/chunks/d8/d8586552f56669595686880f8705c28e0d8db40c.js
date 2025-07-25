System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Collider2D, Component, Contact2DType, Vec3, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, Enemy;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70755R2FflBxpRwvmPjDBit", "Enemy", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Collider2D', 'Component', 'Contact2DType', 'IPhysics2DContact', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Enemy", Enemy = (_dec = ccclass('Enemy'), _dec(_class = (_class2 = class Enemy extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          _initializerDefineProperty(this, "maxX", _descriptor2, this);

          _initializerDefineProperty(this, "minX", _descriptor3, this);

          _initializerDefineProperty(this, "pos", _descriptor4, this);

          _initializerDefineProperty(this, "createTime", _descriptor5, this);

          _initializerDefineProperty(this, "downAnimation", _descriptor6, this);

          _initializerDefineProperty(this, "hitAnimation", _descriptor7, this);

          _initializerDefineProperty(this, "hp", _descriptor8, this);

          this.collider = null;
          this.targetToDestroy = null;
          this.isExecuteAnimation = false;
          this.isHit = false;
          this.isHitAnimation = false;
        }

        onLoad() {
          this.collider = this.node.getComponent(Collider2D);

          if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onDestroy() {
          const collider = this.node.getComponent(Collider2D);

          if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        update(deltaTime) {
          if (this.targetToDestroy) {
            this.targetToDestroy.destroy();
            this.targetToDestroy = null;
          }

          this.node.setPosition(this.node.position.x, this.node.position.y - this.speed * deltaTime, this.node.position.z);
          const anim = this.node.getComponent(Animation);

          if (this.hp <= 0 && !this.isExecuteAnimation) {
            this.isExecuteAnimation = true;
            anim.once(Animation.EventType.FINISHED, this.onAnimationFinished, this);
            anim.play(this.downAnimation);
          }

          if (this.hp > 0 && this.hitAnimation !== '' && this.isHit && !this.isHitAnimation) {
            this.isHitAnimation = true;
            anim.once(Animation.EventType.FINISHED, () => {
              this.isHit = false;
              this.isHitAnimation = false;
            }, this);
            anim.play(this.hitAnimation);
          }

          if (this.node.position.y < -600) {
            this.node.destroy();
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          this.hp--;
          this.targetToDestroy = otherCollider.node;
          this.isHit = true;
        }

        onAnimationFinished() {
          this.node.destroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxX", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "minX", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pos", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "createTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "downAnimation", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "hitAnimation", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "hp", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d8586552f56669595686880f8705c28e0d8db40c.js.map