System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Component, Input, input, _dec, _class, _crd, ccclass, property, Player;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Component = _cc.Component;
      Input = _cc.Input;
      input = _cc.input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27e5dDBIrhMC6yaVndg+UDV", "Player", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Component', 'EventKeyboard', 'EventMouse', 'Input', 'input', 'Node', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Player", Player = (_dec = ccclass('Player'), _dec(_class = class Player extends Component {
        constructor() {
          super(...arguments);
          this.animation = null;
        }

        start() {
          this.animation = this.node.getComponent(Animation);
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        }

        onMouseDown(event) {
          var mouseCode = event.getButton();
          if (mouseCode === 0) return this.jumpStep(mouseCode + 1);
          if (mouseCode === 2) return this.jumpStep(mouseCode);
        }

        onMouseUp(event) {}

        jumpStep(type) {
          var animateName = type === 1 ? 'JumpOneStep' : 'JumpTwoStep';
          var pos = this.node.getPosition(); // this.node.setPosition(pos.x + type * 40, pos.y, pos.z)

          this.animation.play(animateName); // 监听动画每帧更新，调整x的基准位置

          this.animation.on(Animation.EventType.PLAY, () => {
            var currentPos = this.node.getPosition();
            console.log(pos.x + currentPos.x); // 动画的x值 + 起始位置 = 最终位置

            this.node.setPosition(pos.x + currentPos.x, currentPos.y, currentPos.z);
          });
        }

        update(deltaTime) {}

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