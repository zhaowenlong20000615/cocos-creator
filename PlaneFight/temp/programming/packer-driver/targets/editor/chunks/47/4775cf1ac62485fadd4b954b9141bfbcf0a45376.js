System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EnemyBox, _dec, _class, _crd, ccclass, property, GameManager;

  function _reportPossibleCrUseOfEnemyBox(extras) {
    _reporterNs.report("EnemyBox", "./EnemyBox", _context.meta, extras);
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
        onLoad() {}

        start() {
          this.createEnemy();
        }

        createEnemy() {
          (_crd && EnemyBox === void 0 ? (_reportPossibleCrUseOfEnemyBox({
            error: Error()
          }), EnemyBox) : EnemyBox).getInstance().createEnemy();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4775cf1ac62485fadd4b954b9141bfbcf0a45376.js.map