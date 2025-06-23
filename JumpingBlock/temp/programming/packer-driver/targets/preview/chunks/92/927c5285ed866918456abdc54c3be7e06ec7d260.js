System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Input, input, _dec, _class, _crd, ccclass, property, Player;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Input = _cc.Input;
      input = _cc.input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27e5dDBIrhMC6yaVndg+UDV", "Player", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventKeyboard', 'EventMouse', 'Input', 'input', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Player", Player = (_dec = ccclass('Player'), _dec(_class = class Player extends Component {
        start() {
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        }

        update(deltaTime) {}

        onMouseDown(event) {
          var mouseCode = event.getButton();
          if (mouseCode === 0) return this.jumpStep(mouseCode + 1);
          if (mouseCode === 2) return this.jumpStep(mouseCode);
          console.log(event.getButton());
        }

        onMouseUp(event) {}

        jumpStep(type) {
          var pos = this.node.getPosition();
          this.node.setPosition(pos.x + type * 40, pos.y, pos.z);
        }

        onDestroy() {
          input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=927c5285ed866918456abdc54c3be7e06ec7d260.js.map