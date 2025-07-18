System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Prefab, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, EnemyBox;

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
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "92db9/IMolKBYQD2WX5Xxz8", "EnemyBox", undefined);

      __checkObsolete__(['_decorator', 'Component', 'find', 'instantiate', 'math', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemyBox", EnemyBox = (_dec = ccclass('EnemyBox'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = (_class2 = (_class3 = class EnemyBox extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ememy0Prefab", _descriptor, this);

          _initializerDefineProperty(this, "ememy1Prefab", _descriptor2, this);

          _initializerDefineProperty(this, "ememy2Prefab", _descriptor3, this);
        }

        static getInstance() {
          return EnemyBox._instance;
        }

        onLoad() {
          EnemyBox._instance = this;
        }

        onDestroy() {
          this.unscheduleAllCallbacks();
        }

        createEnemy() {
          this.createMoreTypeEnemy(this.ememy0Prefab);
        }

        createMoreTypeEnemy(prefab) {
          const ememy = instantiate(prefab);
          const enemyComponent = ememy.getComponent('Enemy');
          this.node.addChild(ememy);
          this.scheduleOnce(() => this.createMoreTypeEnemy(prefab), enemyComponent.createTime);
        }

      }, _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ememy0Prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ememy1Prefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ememy2Prefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=579d7f8db28b8a04383f1e48e987164bb74201c6.js.map