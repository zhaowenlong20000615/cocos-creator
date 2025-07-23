System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, math, Prefab, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, RewardBox;

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
      math = _cc.math;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ec45bvh95tMPbKV9zlGBUdZ", "RewardBox", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'math', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RewardBox", RewardBox = (_dec = ccclass('RewardBox'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec(_class = (_class2 = (_class3 = class RewardBox extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "twoBlletPrefab", _descriptor, this);

          _initializerDefineProperty(this, "blowPrefab", _descriptor2, this);
        }

        static getInstance() {
          return RewardBox._instance;
        }

        onLoad() {
          RewardBox._instance = this;
        }

        createReward() {
          this.createMoreTypeReward(this.twoBlletPrefab);
          this.createMoreTypeReward(this.blowPrefab);
        }

        createMoreTypeReward(prefab) {
          const reward = instantiate(prefab);
          const rewardNode = reward.getComponent('Reward');
          const minX = rewardNode.minX;
          const maxX = rewardNode.maxX;
          const y = rewardNode.y;
          const createTime = rewardNode.createTime;
          const x = math.randomRange(minX, maxX);
          reward.setPosition(x, y, 0);
          this.node.addChild(reward);
          this.scheduleOnce(() => this.createMoreTypeReward(prefab), createTime);
        }

      }, _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "twoBlletPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blowPrefab", [_dec3], {
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
//# sourceMappingURL=ec6d01e9fd0c9305a655522136a7b4a3ff3e8546.js.map