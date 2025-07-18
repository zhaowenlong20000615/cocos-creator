System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, Prefab, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, EnemyBox;

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
      find = _cc.find;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "092e50IMWxGPatgEbfmnZn4", "EmemyBox", undefined);

      __checkObsolete__(['_decorator', 'Component', 'find', 'instantiate', 'math', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemyBox", EnemyBox = (_dec = ccclass('EnemyBox'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = (_class2 = (_class3 = class EnemyBox extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ememy0Prefab", _descriptor, this);

          _initializerDefineProperty(this, "ememy1Prefab", _descriptor2, this);

          _initializerDefineProperty(this, "ememy2Prefab", _descriptor3, this);

          _initializerDefineProperty(this, "test", _descriptor4, this);
        }

        static getInstance() {
          if (!EnemyBox._instance) {
            console.log(find('EmemyBox'));
            EnemyBox._instance = find('EmemyBox').getComponent(EnemyBox);
          }

          return EnemyBox._instance;
        }

        start() {
          console.log(this.test);
          console.log(this.ememy0Prefab);
        }

        createEmemy() {
          this.createEmemy0();
        }

        createEmemy0() {
          console.log('createEmemy0', this.ememy0Prefab); // const ememy = instantiate(this.ememy0Prefab);
          // console.log(ememy);
          // ememy.setPosition(math.randomRangeInt(this.minX, this.maxX), this.node.position.y, this.node.position.z);
          // parentNode.addChild(ememy);
        }

        createEmemy1() {}

        createEmemy2() {}

      }, _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ememy0Prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ememy1Prefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ememy2Prefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "test", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=04afd1d0a6f29cb18edab811b40abb7ec73da710.js.map