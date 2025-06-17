System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, Aa;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8e44vtOBNBlLGKkUCoQyb9", "AutoDestory", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Aa", Aa = (_dec = ccclass('Aa'), _dec(_class = class Aa extends Component {
        start() {}

        update(deltaTime) {
          console.log(this.node.position);
          var pos = this.node.position;
          if (pos.z > -50) return;
          this.node.destroy();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a8f38f8abb606a069c4d6c1834241bdfc68e1c1.js.map