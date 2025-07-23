System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EnemyBox, RewardBox, _dec, _class, _crd, ccclass, property, GameManager;

  function _reportPossibleCrUseOfEnemyBox(extras) {
    _reporterNs.report("EnemyBox", "./EnemyBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardBox(extras) {
    _reporterNs.report("RewardBox", "./RewardBox", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      EnemyBox = _unresolved_2.EnemyBox;
    }, function (_unresolved_3) {
      RewardBox = _unresolved_3.RewardBox;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "04b8dM1LL9FOp+0ILfVC2Ex", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec(_class = class GameManager extends Component {
        start() {
          this.createEnemy();
          this.createReward();
        }

        createEnemy() {
          (_crd && EnemyBox === void 0 ? (_reportPossibleCrUseOfEnemyBox({
            error: Error()
          }), EnemyBox) : EnemyBox).getInstance().createEnemy();
        }

        createReward() {
          (_crd && RewardBox === void 0 ? (_reportPossibleCrUseOfRewardBox({
            error: Error()
          }), RewardBox) : RewardBox).getInstance().createReward();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4775cf1ac62485fadd4b954b9141bfbcf0a45376.js.map