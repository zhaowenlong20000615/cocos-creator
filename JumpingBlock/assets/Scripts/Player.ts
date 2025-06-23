import { _decorator, Animation, Component, EventKeyboard, EventMouse, Input, input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    private animation: Animation = null

    start() {
      this.animation = this.node.getComponent(Animation)
      input.on(Input.EventType.MOUSE_DOWN , this.onMouseDown, this)
      input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this)
    }

    update(deltaTime: number) {

    }

    onMouseDown(event: EventMouse) {
      const mouseCode = event.getButton()
      if (mouseCode === 0) return this.jumpStep(mouseCode + 1)
      if( mouseCode === 2) return this.jumpStep(mouseCode)
    }

    onMouseUp(event: EventMouse) {
    }


    jumpStep(type: number) {
      const animateName = type === 1 ? 'JumpOneStep' : 'JumpTwoStep'
      const pos = this.node.getPosition()
      console.log(pos);

      this.animation.play(animateName)
      this.node.setPosition(pos.x + type * 40, pos.y, pos.z)
    }

    protected onDestroy(): void {
        input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this)
        input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this)
    }
  }
